package Backend.chaubisedhakaBackend.service;

import Backend.chaubisedhakaBackend.exceptions.APIException;
import Backend.chaubisedhakaBackend.exceptions.ResourceNotFoundException;
import Backend.chaubisedhakaBackend.model.Cart;
import Backend.chaubisedhakaBackend.model.CartItem;
import Backend.chaubisedhakaBackend.model.Product;
import Backend.chaubisedhakaBackend.payload.CartDTO;
import Backend.chaubisedhakaBackend.repositories.CartItemRepository;
import Backend.chaubisedhakaBackend.repositories.CartRepository;
import Backend.chaubisedhakaBackend.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    @Override
    public CartDTO addProductToCart(Long productId, Integer quantity) {
        Cart cart=createCart();

        Product product=productRepository.findById(productId)
                .orElseThrow(()->new ResourceNotFoundException("Product","productId",productId));

        CartItem cartItem=cartItemRepository.findCartItemByProductIdAndCartId(cart.getCartId(),productId);

        if(cartItem !=null){
            throw  new APIException("Product"+product.getProductName()+"already exists in the cart");
        }

        return null;
    }

    private Cart createCart(){
        Cart userCart=cartRepository.findCartByEmail(authUtil.LoggedInEmail());
        if(userCart != null){
            return userCart;
        }
        Cart cart =new Cart();
        cart.setTotalPrice(0.00);
        cart.setUser(authUtil.LoggedInUser());
        Cart newCart=cartRepository.save(cart);
        return newCart;

    }

}
