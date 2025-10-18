package Backend.chaubisedhakaBackend.repositories;

import Backend.chaubisedhakaBackend.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address,Long> {
}
