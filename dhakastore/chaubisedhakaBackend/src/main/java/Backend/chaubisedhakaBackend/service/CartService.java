package Backend.chaubisedhakaBackend.service;

import Backend.chaubisedhakaBackend.payload.CartDTO;

public interface CartService {

    CartDTO addProductToCart(Long productId, Integer quantity);
}