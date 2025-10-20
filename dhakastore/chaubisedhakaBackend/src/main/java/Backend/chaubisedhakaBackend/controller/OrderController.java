package Backend.chaubisedhakaBackend.controller;

import Backend.chaubisedhakaBackend.model.User;
import Backend.chaubisedhakaBackend.payload.OrderDTO;
import Backend.chaubisedhakaBackend.payload.OrderRequestDTO;
import Backend.chaubisedhakaBackend.service.OrderService;
import Backend.chaubisedhakaBackend.util.AuthUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class OrderController {

    @Autowired
    private AuthUtil authUtil;

    @Autowired
    private OrderService orderService;

    @PostMapping("/order/users/payments/{paymentMethod}")
    public ResponseEntity<OrderDTO>orderProducts(@PathVariable String paymentMethod,
                                                 @RequestBody OrderRequestDTO orderRequestDTO){
        String emailId=authUtil.loggedInEmail();
        System.out.println("OrderRequest data: " + orderRequestDTO);
        OrderDTO order=orderService.placeOrder(
                emailId,
                orderRequestDTO.getAddressId(),
                paymentMethod,
                orderRequestDTO.getPgStatus(),
                orderRequestDTO.getPgPaymentId(),
                orderRequestDTO.getPgName(),
                orderRequestDTO.getPgResponseMessage()
        );
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }

}
