package Backend.chaubisedhakaBackend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name="addresses")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addressId;

    @NotBlank
    @Size(min=4,message = "Street name must be atleast 4 characters")
    private String street;

    @NotBlank
    @Size(min=4,message = "City name must be atleast 4 characters")
    private String city;

    @NotBlank
    @Size(min=4,message = "State name must be atleast 4 characters")
    private String state;

    @NotBlank
    @Size(min=4,message = "Country name must be atleast 4 characters")
    private String country;

    @NotBlank
    @Size(min=4,message = "This name must be atleast 4 characters")
    private String nagarOrGaupalika;

    @NotNull
    @Min(value = 1, message = "Ward number must be at least 1")
    private Long wardNo;

    private String pincode;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    public Address(Long addressId, String country, String state, String city, String nagarOrGaupalika, Long wardNo, String street, String pincode, User user) {
        this.addressId = addressId;
        this.country = country;
        this.state = state;
        this.city = city;
        this.nagarOrGaupalika = nagarOrGaupalika;
        this.wardNo = wardNo;
        this.street = street;
        this.pincode = pincode;
        this.user = user;
    }
}
