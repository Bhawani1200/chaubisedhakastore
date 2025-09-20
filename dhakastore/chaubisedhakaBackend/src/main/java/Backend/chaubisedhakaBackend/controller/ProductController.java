package Backend.chaubisedhakaBackend.controller;


import Backend.chaubisedhakaBackend.model.Product;
import Backend.chaubisedhakaBackend.payload.ProductDTO;
import Backend.chaubisedhakaBackend.payload.ProductResponse;
import Backend.chaubisedhakaBackend.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("/admin/categories/{categoryId}/product")
    public ResponseEntity<ProductDTO>addProduct(@Valid  @RequestBody ProductDTO productDTO,
                                                @PathVariable Long categoryId){
     ProductDTO savedProductDTO=productService.addProduct(productDTO, categoryId);
     return new ResponseEntity<>(savedProductDTO, HttpStatus.CREATED);
    }

    @GetMapping("/public/products")
    public ResponseEntity<ProductResponse>getAllProducts(){
        ProductResponse productResponse=productService.getAllProducts();
        return new ResponseEntity<>(productResponse,HttpStatus.OK);
    }

    @GetMapping("/public/categories/{categoryId}/products")
    public ResponseEntity<ProductResponse>getProductsByCategory(@PathVariable Long categoryId){
        ProductResponse productResponse=productService.searchCategoryById(categoryId);
        return new ResponseEntity<>(productResponse,HttpStatus.OK);
    }

    @GetMapping("/public/products/keyword/{keyword}")
    public ResponseEntity<ProductResponse>getProductsByKeyword(@PathVariable String keyword){
        ProductResponse productResponse=productService.searchProductByKeyword(keyword);
        return new ResponseEntity<>(productResponse,HttpStatus.FOUND);
    }

    @PutMapping("/admin/products/{productId}")
    public ResponseEntity<ProductDTO>updateProduct(@Valid @RequestBody ProductDTO productDTO,
                                                         @PathVariable Long productId){
        ProductDTO productResponse=productService.updateProduct(productId,productDTO);
        return  new ResponseEntity<>(productResponse,HttpStatus.OK);

    }

    @DeleteMapping("/admin/product/{productId}")
    public ResponseEntity<ProductDTO>deleteProduct(@PathVariable Long productId){
        ProductDTO deletedProduct=productService.deleteProduct(productId);
        return new ResponseEntity<>(deletedProduct,HttpStatus.OK);
    }

    @PutMapping("/products/{productId}/image")
    public ResponseEntity<ProductDTO>updateProductImage(@PathVariable Long productId,
                                                        @RequestParam("Image")MultipartFile image) throws IOException {
        ProductDTO updatedProduct=productService.updateProductImage(productId,image);
        return new ResponseEntity<>(updatedProduct,HttpStatus.OK);
    }
}
