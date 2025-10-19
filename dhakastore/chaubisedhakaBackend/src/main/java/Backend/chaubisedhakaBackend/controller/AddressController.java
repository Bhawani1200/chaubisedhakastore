package Backend.chaubisedhakaBackend.controller;

import Backend.chaubisedhakaBackend.model.User;
import Backend.chaubisedhakaBackend.payload.AddressDTO;
import Backend.chaubisedhakaBackend.service.AddressService;
import Backend.chaubisedhakaBackend.util.AuthUtil;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AddressController {

    @Autowired
    AuthUtil authUtil;

    @Autowired
    AddressService addressService;

    @PostMapping("/addresses")
    public ResponseEntity<AddressDTO>createAddress(@Valid  @RequestBody AddressDTO addressDTO){
        User user=authUtil.loggedInUser();
        AddressDTO savedAddressDTO=addressService.createAddress(addressDTO,user);
        return new ResponseEntity<>(savedAddressDTO, HttpStatus.OK);
    }

    @GetMapping("/addresses")
    public ResponseEntity<List<AddressDTO>>getAddresses(){
        List<AddressDTO> savedAddress=addressService.getAddresses();
        return new ResponseEntity<>(savedAddress,HttpStatus.OK);
    }

    @GetMapping("/addresses/{addressId}")
    public ResponseEntity<AddressDTO>getAddressById(@PathVariable  Long addressId){
        AddressDTO addressDTO=addressService.getAddressesById(addressId);
        return new ResponseEntity<>(addressDTO,HttpStatus.OK);
    }

    @GetMapping("/users/addresses")
    public ResponseEntity<List<AddressDTO>>getUsersAddresses(){
        User user=authUtil.loggedInUser();
        List<AddressDTO> addressList=addressService.getUserAddresses(user);
        return new ResponseEntity<>(addressList,HttpStatus.OK);
    }

    @PutMapping("/addresses/{addressId}")
    public ResponseEntity<AddressDTO>updateAddress(@PathVariable Long addressId,
                                                   @RequestBody AddressDTO addressDTO){
        AddressDTO updatedAddress=addressService.updateAddress(addressId,addressDTO);
        return new ResponseEntity<>(updatedAddress,HttpStatus.OK);
    }
}
