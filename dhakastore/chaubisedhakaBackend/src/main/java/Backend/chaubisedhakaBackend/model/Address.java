package Backend.chaubisedhakaBackend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="addresses")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addressId;

    @NotBlank
    @Size(min=4,message = "Country name must be atleast 4 characters")
    private String country;

    @NotBlank
    @Size(min=4,message = "State name must be atleast 4 characters")
    private String state;

    @NotBlank
    @Size(min=4,message = "This name must be atleast 4 characters")
    private String nagarOrGaupalika;

    @NotBlank
    @Size(min=4,message = "Ward name must be atleast 4 characters")
    private String ward;

    @NotNull
    @Min(value=1,message = "ward number must at least be 1")
    private Long wardNo;

    @NotBlank
    @Size(min=4,message = "Street name must be atleast 4 characters")
    private String street;

    @ToString.Exclude
    @ManyToMany(mappedBy = "addresses")
    private List<User> users=new ArrayList<>();

    public Address(String country, String street , String state, String ward, Long wardNo,String nagarOrGaupalika) {
        this.country = country;
        this.street = street;
        this.state = state;
        this.ward = ward;
        this.wardNo = wardNo;
        this.nagarOrGaupalika = nagarOrGaupalika;
    }
}
