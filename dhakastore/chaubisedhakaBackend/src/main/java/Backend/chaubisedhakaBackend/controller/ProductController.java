package Backend.chaubisedhakaBackend.controller;


import Backend.chaubisedhakaBackend.model.Product;
import Backend.chaubisedhakaBackend.payload.ProductDTO;
import Backend.chaubisedhakaBackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("/admin/categories/{productId}/product")
    public ResponseEntity<ProductDTO>addProduct(@RequestBody Product product,
                                                @PathVariable Long categoryId){
     ProductDTO productDTO=productService.addProduct(product,categoryId);
     return productDTO;
    }
}
