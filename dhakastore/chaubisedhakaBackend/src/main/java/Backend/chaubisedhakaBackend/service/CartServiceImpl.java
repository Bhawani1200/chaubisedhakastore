package Backend.chaubisedhakaBackend.service;

import Backend.chaubisedhakaBackend.exceptions.APIException;
import Backend.chaubisedhakaBackend.exceptions.ResourceNotFoundException;
import Backend.chaubisedhakaBackend.model.Cart;
import Backend.chaubisedhakaBackend.model.CartItem;
import Backend.chaubisedhakaBackend.model.Product;
import Backend.chaubisedhakaBackend.payload.CartDTO;
import Backend.chaubisedhakaBackend.payload.ProductDTO;
import Backend.chaubisedhakaBackend.repositories.CartItemRepository;
import Backend.chaubisedhakaBackend.repositories.CartRepository;
import Backend.chaubisedhakaBackend.repositories.ProductRepository;
import Backend.chaubisedhakaBackend.util.AuthUtil;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class CartServiceImpl implements CartService{

    @Autowired
    CartRepository cartRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CartItemRepository cartItemRepository;

    @Autowired
    AuthUtil authUtil;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public CartDTO addProductToCart(Long productId, Integer quantity) {
        Cart cart=createCart();

        Product product=productRepository.findById(productId)
                .orElseThrow(()->new ResourceNotFoundException("Product","productId",productId));

        CartItem cartItem=cartItemRepository.findCartItemByProductIdAndCartId(cart.getCartId(),productId);

        if(cartItem !=null){
            throw  new APIException("Product"+product.getProductName()+"already exists in the cart");
        }

        if(product.getQuantity()==0){
            throw new APIException(product.getProductName()+ "is not available");
        }

        if(product.getQuantity()<quantity){
            throw new APIException("Please,make an order of "+product.getQuantity() +
                    "less than or equal of the quantity"+product.getQuantity() + ".");
        }

        CartItem newCartItem=new CartItem();
        newCartItem.setProduct(product);
        newCartItem.setCart(cart);
        newCartItem.setQuantity(product.getQuantity());
        newCartItem.setProductPrice(product.getSpecialPrice());
        newCartItem.setDiscount(product.getDiscount());
        cartItemRepository.save(newCartItem);

        product.setQuantity(product.getQuantity());

        cart.setTotalPrice(cart.getTotalPrice() + (product.getSpecialPrice() * quantity));

        cartRepository.save(cart);

        CartDTO cartDTO=modelMapper.map(cart,CartDTO.class);

        List<CartItem> cartItems=cart.getCartItems();

        Stream<ProductDTO>productStream=cartItems.stream().map(item->{
            ProductDTO map=modelMapper.map(item.getProduct(),ProductDTO.class);
            map.setQuantity(item.getQuantity());
            return map;
        });

        cartDTO.setProducts(productStream.toList());

        return cartDTO;
    }

    private Cart createCart(){
        Cart userCart=cartRepository.findCartByEmail(authUtil.loggedInEmail());
        if(userCart != null){
            return userCart;
        }
        Cart cart =new Cart();
        cart.setTotalPrice(0.00);
        cart.setUser(authUtil.loggedInUser());
        Cart newCart=cartRepository.save(cart);
        return newCart;

    }
    @Override
    public List<CartDTO> getAllCarts() {

        List<Cart>carts=cartRepository.findAll();

        if(carts.isEmpty()){
            throw new APIException("Cart is empty");
        }

        List<CartDTO> cartDTOs=carts.stream()
        .map(cart->{
            CartDTO cartDTO=modelMapper.map(cart,CartDTO.class);

            List<ProductDTO>products=cart.getCartItems().stream().map(cartItem->{

                        ProductDTO productDTO=modelMapper.map(cartItem.getProduct(),ProductDTO.class);

                        productDTO.setQuantity(cartItem.getQuantity());

                        return productDTO;

                    }).collect(Collectors.toList());
            cartDTO.setProducts(products);

            return cartDTO;

        }).collect(Collectors.toList());

        return cartDTOs;
    }

}
