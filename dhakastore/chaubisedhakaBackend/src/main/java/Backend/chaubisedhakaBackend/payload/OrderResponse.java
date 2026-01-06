package Backend.chaubisedhakaBackend.payload;

import java.util.List;

public class OrderResponse {

    private List<OrderDTO> content;
    private Integer pageNumber;
    private Integer pageSize;
    private Long totalElements;
    private Integer totalPages;
    private boolean lastPage;
}
