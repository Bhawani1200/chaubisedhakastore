package Backend.chaubisedhakaBackend.service;

import Backend.chaubisedhakaBackend.model.Product;
import Backend.chaubisedhakaBackend.payload.ProductDTO;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService{
    @Override
    public ProductDTO addProduct(Product product, Long categoryId) {
        return null;
    }
}
