package Backend.chaubisedhakaBackend.service;

import Backend.chaubisedhakaBackend.model.Product;
import Backend.chaubisedhakaBackend.payload.ProductDTO;

public interface ProductService {

    ProductDTO addProduct(Product product, Long categoryId);
}
