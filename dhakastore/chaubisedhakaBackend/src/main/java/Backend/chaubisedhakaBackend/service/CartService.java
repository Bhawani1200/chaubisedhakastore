package Backend.chaubisedhakaBackend.service;

import Backend.chaubisedhakaBackend.payload.CartDTO;

import java.util.List;

public interface CartService {

    CartDTO addProductToCart(Long productId, Integer quantity);

    List<CartDTO> getAllCarts();
}