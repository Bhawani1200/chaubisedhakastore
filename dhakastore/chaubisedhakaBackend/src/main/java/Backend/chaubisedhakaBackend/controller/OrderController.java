package Backend.chaubisedhakaBackend.controller;

import Backend.chaubisedhakaBackend.config.AppConstants;
import Backend.chaubisedhakaBackend.model.User;
import Backend.chaubisedhakaBackend.payload.OrderDTO;
import Backend.chaubisedhakaBackend.payload.OrderRequestDTO;
import Backend.chaubisedhakaBackend.payload.OrderResponse;
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

    @GetMapping("/admin/orders")
    public  ResponseEntity<OrderResponse>getAllOrders(
            @RequestParam(name = "pageNumber", defaultValue = AppConstants.PAGE_NUMBER, required = false) Integer pageNumber,
            @RequestParam(name = "pageSize", defaultValue = AppConstants.PAGE_SIZE, required = false) Integer pageSize,
            @RequestParam(name = "sortBy", defaultValue = AppConstants.SORT_ORDERS_BY, required = false) String sortBy,
            @RequestParam(name = "sortOrder", defaultValue = AppConstants.SORT_DIR, required = false) String sortOrder
    ){
        OrderResponse orderResponse=orderService.getAllOrders(pageNumber,pageSize,sortBy,sortOrder);
        return new ResponseEntity<OrderResponse>(orderResponse,HttpStatus.OK);
    }

}
