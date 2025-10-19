package Backend.chaubisedhakaBackend.repositories;

import Backend.chaubisedhakaBackend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order,Long> {
}
