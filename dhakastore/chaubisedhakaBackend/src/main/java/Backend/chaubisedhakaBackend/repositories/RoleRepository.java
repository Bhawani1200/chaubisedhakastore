package Backend.chaubisedhakaBackend.repositories;

import Backend.chaubisedhakaBackend.model.AppRole;
import Backend.chaubisedhakaBackend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role,Long> {
    Optional<Role> findByRoleName(AppRole appRole);
}
