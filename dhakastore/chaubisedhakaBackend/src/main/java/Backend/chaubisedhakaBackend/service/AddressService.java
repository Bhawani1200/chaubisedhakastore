package Backend.chaubisedhakaBackend.service;

import Backend.chaubisedhakaBackend.model.User;
import Backend.chaubisedhakaBackend.payload.AddressDTO;
import jakarta.validation.Valid;

public interface AddressService {
    AddressDTO createAddress(@Valid AddressDTO addressDTO, User user);
}
