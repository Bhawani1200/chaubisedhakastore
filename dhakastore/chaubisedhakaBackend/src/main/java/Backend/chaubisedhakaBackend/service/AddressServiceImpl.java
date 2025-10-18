package Backend.chaubisedhakaBackend.service;

import Backend.chaubisedhakaBackend.model.Address;
import Backend.chaubisedhakaBackend.model.User;
import Backend.chaubisedhakaBackend.payload.AddressDTO;
import Backend.chaubisedhakaBackend.repositories.AddressRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressServiceImpl implements AddressService{

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    AddressRepository addressRepository;

    @Override
    public AddressDTO createAddress(AddressDTO addressDTO, User user) {
        Address address=modelMapper.map(addressDTO,Address.class);

        List<Address> addressesList=user.getAddresses();
        addressesList.add(address);
        user.setAddresses(addressesList);
        address.setUser(user);
        Address savedAddress=addressRepository.save(address);
        return modelMapper.map(savedAddress,AddressDTO.class);

    }
}
