package Backend.chaubisedhakaBackend.repositories;

import Backend.chaubisedhakaBackend.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart,Long> {
}
