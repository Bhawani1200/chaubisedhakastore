package Backend.chaubisedhakaBackend.model;

import jakarta.persistence.Entity;

@Entity
public class Product {
    private Integer productId;
    private String productName;
    private String description;
    private Integer quantity;
    private double price;
    private double specialPrice;
}
