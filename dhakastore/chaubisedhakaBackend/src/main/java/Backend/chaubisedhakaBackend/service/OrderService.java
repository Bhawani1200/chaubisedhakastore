package Backend.chaubisedhakaBackend.service;

import Backend.chaubisedhakaBackend.payload.OrderDTO;

public interface OrderService {

    OrderDTO placeOrder(String emailId, Long addressId, String paymentMethod, String pgName, String pgPaymentId, String pgStatus, String pgResponseMessage);
}
