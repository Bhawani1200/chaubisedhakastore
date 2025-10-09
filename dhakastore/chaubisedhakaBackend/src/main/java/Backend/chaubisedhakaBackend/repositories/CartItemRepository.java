package Backend.chaubisedhakaBackend.repositories;

import Backend.chaubisedhakaBackend.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem,Long> {
}
