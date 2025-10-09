package Backend.chaubisedhakaBackend.controller;

import Backend.chaubisedhakaBackend.payload.CartDTO;
import Backend.chaubisedhakaBackend.repositories.CartRepository;
import Backend.chaubisedhakaBackend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CartController {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartService cartService;

    @PostMapping("/carts/products/{productId}/quantity/{quantity}")
    public ResponseEntity<CartDTO>addProductToCart(@PathVariable Long productId,
                                                   @PathVariable Integer quantity){
      CartDTO cartDTO=cartService.addProductToCart(productId,quantity);
      return new ResponseEntity<CartDTO>(cartDTO, HttpStatus.CREATED);
    }
}
