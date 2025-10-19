package Backend.chaubisedhakaBackend.repositories;

import Backend.chaubisedhakaBackend.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment,Long> {
}
