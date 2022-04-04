package nf.shop.backend.shoppingcart;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "shoppingcart")
@Data
@NoArgsConstructor

public class ShoppingCart {



    @Id
    private String id;
    private String shoppingCartName;

}


