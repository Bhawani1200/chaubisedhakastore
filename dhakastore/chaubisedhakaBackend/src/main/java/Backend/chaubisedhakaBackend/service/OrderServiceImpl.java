package Backend.chaubisedhakaBackend.service;

import Backend.chaubisedhakaBackend.exceptions.APIException;
import Backend.chaubisedhakaBackend.exceptions.ResourceNotFoundException;
import Backend.chaubisedhakaBackend.model.*;
import Backend.chaubisedhakaBackend.payload.OrderDTO;
import Backend.chaubisedhakaBackend.repositories.AddressRepository;
import Backend.chaubisedhakaBackend.repositories.CartRepository;
import Backend.chaubisedhakaBackend.repositories.OrderRepository;
import Backend.chaubisedhakaBackend.repositories.PaymentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    CartRepository cartRepository;

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    PaymentRepository paymentRepository;

    @Autowired
    OrderRepository orderRepository;

    @Override
    @Transactional
    public OrderDTO placeOrder(String emailId, Long addressId, String paymentMethod, String pgName, String pgPaymentId, String pgStatus, String pgResponseMessage) {
        Cart cart=cartRepository.findCartByEmail(emailId);

        if(cart==null){
            throw new ResourceNotFoundException("Cart","email",emailId);
        }

        Address address=addressRepository.findById(addressId)
                .orElseThrow(()->new ResourceNotFoundException("Address","addressId",addressId));

        Order order=new Order();
        order.setEmail(emailId);
        order.setOrderDate(LocalDate.now());
        order.setTotalAmount(cart.getTotalPrice());
        order.setOrderStatus("Accepted");
        order.setAddress(address);

        Payment payment=new Payment(paymentMethod,pgPaymentId,pgResponseMessage,pgName,pgStatus);
        payment.setOrder(order);
        payment=paymentRepository.save(payment);
        order.setPayment(payment);

        Order savedOrder=orderRepository.save(order);
        List<CartItem> cartItemList=new ArrayList<>();
        if (cartItemList.isEmpty()){
            throw new APIException("Cart is empty");
        }
        return null;
    }
}
