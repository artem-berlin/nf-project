package nf.shop.backend.shoppingcart;

import lombok.Data;

@Data
public class LineItem {

    private String productId;
    private String title;
    private String price;

}
