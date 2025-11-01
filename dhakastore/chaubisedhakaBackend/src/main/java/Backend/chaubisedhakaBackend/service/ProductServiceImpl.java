package Backend.chaubisedhakaBackend.service;

import Backend.chaubisedhakaBackend.model.Cart;
import Backend.chaubisedhakaBackend.payload.CartDTO;
import Backend.chaubisedhakaBackend.repositories.CartRepository;
import Backend.chaubisedhakaBackend.repositories.CategoryRepository;
import Backend.chaubisedhakaBackend.repositories.ProductRepository;
import Backend.chaubisedhakaBackend.exceptions.APIException;
import Backend.chaubisedhakaBackend.exceptions.ResourceNotFoundException;
import Backend.chaubisedhakaBackend.model.Category;
import Backend.chaubisedhakaBackend.model.Product;
import Backend.chaubisedhakaBackend.payload.ProductDTO;
import Backend.chaubisedhakaBackend.payload.ProductResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartService cartService;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private FileService fileService;

    @Value("${project.image}")
    private String path;

    @Value("${image.base.url}")
    private String imageBaseUrl;

    @Override
    public ProductDTO addProduct(ProductDTO productDTO, Long categoryId) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category", "categoryId", categoryId));

        boolean isProductNotPresent = true;

        List<Product> products = category.getProducts();
        for (Product value : products) {
            if (value.getProductName().equals(productDTO.getProductName())) {
                isProductNotPresent = false;
                break;
            }
        }
        if (isProductNotPresent) {
            Product product = modelMapper.map(productDTO, Product.class);
            product.setCategory(category);
            product.setImage("product.png");
            double specialPrice = product.getPrice() -
                    ((product.getDiscount() * 0.01) * product.getPrice());
            product.setSpecialPrice(specialPrice);
            Product savedProduct = productRepository.save(product);
            return modelMapper.map(savedProduct, ProductDTO.class);
        }else{
            throw new APIException("Product already exists");
        }
    }

    @Override
    public ProductResponse getAllProducts(Integer pageNumber, Integer pageSize, String sortBy, String sortOrder) {

        Sort sortByAndOrder=sortOrder.equals("asc")
                ?Sort.by(sortBy).ascending()
                :Sort.by(sortBy).descending();
        Pageable pageDetails= PageRequest.of(pageNumber,pageSize,sortByAndOrder);
        Page<Product> pageProducts=productRepository.findAll(pageDetails);

        List<Product> products=pageProducts.getContent();
        List<ProductDTO>productDTOS=products.stream()
                .map(product->modelMapper.map(product,ProductDTO.class))
                .toList();

        ProductResponse productResponse=new ProductResponse();
        productResponse.setPageNumber(pageProducts.getNumber());
        productResponse.setPageSize(pageProducts.getSize());
        productResponse.setTotalElements(pageProducts.getTotalElements());
        productResponse.setTotalPages(pageProducts.getTotalPages());
        productResponse.setLastPage(productResponse.isLastPage());
        productResponse.setContent(productDTOS);
        return productResponse;
    }

    @Override
    public ProductResponse searchCategoryById(Long categoryId, Integer pageNumber, Integer pageSize, String sortBy, String sortOrder) {
        Category category=categoryRepository.findById(categoryId)
                .orElseThrow(()->new ResourceNotFoundException("Category","categoryId",categoryId));
        Sort sortByAndOrder=sortOrder.equals("asc")
                ?Sort.by(sortBy).ascending()
                :Sort.by(sortBy).descending();
        Pageable pageDetails= PageRequest.of(pageNumber,pageSize,sortByAndOrder);
        Page<Product> pageProducts=productRepository.findByCategoryOrderByPriceAsc(category,pageDetails);
        List<Product> products=pageProducts.getContent();

        if(products.isEmpty()){
            throw new APIException(category.getCategoryName()+"Category does not have any product");
        }
        List<ProductDTO>productDTOS=products.stream()
                .map(product->modelMapper.map(product,ProductDTO.class))
                .toList();
        ProductResponse productResponse=new ProductResponse();
        productResponse.setContent(productDTOS);
        productResponse.setPageNumber(pageProducts.getNumber());
        productResponse.setPageSize(pageProducts.getSize());
        productResponse.setTotalElements(pageProducts.getTotalElements());
        productResponse.setTotalPages(pageProducts.getTotalPages());
        productResponse.setLastPage(productResponse.isLastPage());
        return productResponse;
    }

    @Override
    public ProductResponse searchProductByKeyword(String keyword, Integer pageNumber, Integer pageSize, String sortBy, String sortOrder) {

        Sort sortByAndOrder=sortOrder.equals("asc")
                ?Sort.by(sortBy).ascending()
                :Sort.by(sortBy).descending();

        Pageable pageDetails= PageRequest.of(pageNumber,pageSize,sortByAndOrder);
        Page<Product> pageProducts=productRepository.findByProductNameLikeIgnoreCase('%' + keyword + '%',pageDetails);
        List<Product>products=pageProducts.getContent();
        List<ProductDTO>productDTOS=products.stream()
                .map(product-> {
                    ProductDTO productDTO=modelMapper.map(product, ProductDTO.class);
                    productDTO.setImage(constructImageUrl(product.getImage()));
                    return productDTO;
                })

                .toList();

        if(products.size()==0){
            throw new APIException("Products not found with the keyword"+keyword);
        }
        ProductResponse productResponse=new ProductResponse();
        productResponse.setContent(productDTOS);
        return productResponse;
    }

    @Override
    public ProductDTO updateProduct(Long productId, ProductDTO productDTO) {
        Product productFromDB=productRepository.findById(productId)
                .orElseThrow(()->new ResourceNotFoundException("Product","productId",productId));
        Product product=modelMapper.map(productDTO,Product.class);
        productFromDB.setProductName(product.getProductName());
        productFromDB.setDescription(product.getDescription());
        productFromDB.setQuantity(product.getQuantity());
        productFromDB.setPrice(product.getPrice());
        productFromDB.setDiscount(product.getDiscount());
        productFromDB.setSpecialPrice(product.getSpecialPrice());

        Product savedProduct=productRepository.save(productFromDB);

        List<Cart> carts = cartRepository.findCartsByProductId(productId);

        List<CartDTO> cartDTOs = carts.stream().map(cart -> {
            CartDTO cartDTO = modelMapper.map(cart, CartDTO.class);

            List<ProductDTO> products = cart.getCartItems().stream()
                    .map(p -> modelMapper.map(p.getProduct(), ProductDTO.class)).collect(Collectors.toList());

            cartDTO.setProducts(products);

            return cartDTO;

        }).toList();

        cartDTOs.forEach(cart->cartService.updateProductInCarts(cart.getCartId(),productId));

        return modelMapper.map(savedProduct,ProductDTO.class);
    }

    private String constructImageUrl(String imageName){
        return imageBaseUrl.endsWith("/") ? imageBaseUrl + imageName : imageBaseUrl + "/" + imageName;
    }

    @Override
    public ProductDTO deleteProduct(Long productId) {
        Product product=productRepository.findById(productId)
                .orElseThrow(()->new ResourceNotFoundException("Product","productId",productId));

        List<Cart>carts=cartRepository.findCartsByProductId(productId);

        carts.forEach(cart->cartService.deleteProductFromCart(cart.getCartId(),productId));

        productRepository.delete(product);

        return modelMapper.map(product,ProductDTO.class);
    }

    @Override
    public ProductDTO updateProductImage(Long productId, MultipartFile image) throws IOException {
        Product productFromDb=productRepository.findById(productId)
                .orElseThrow(()->new ResourceNotFoundException("Product","productId",productId));

        String fileName=fileService.uploadImage(path,image);
        productFromDb.setImage(fileName);
        Product updatedProduct=productRepository.save(productFromDb);
        return modelMapper.map(updatedProduct,ProductDTO.class);
    }


}
