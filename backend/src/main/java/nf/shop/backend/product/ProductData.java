package nf.shop.backend.product;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "product")
@Data
@NoArgsConstructor
public class ProductData {

    @Id
    private String id;
    private String title = "";
    private String category = "";
    private String description = "";
    private String image ="";
    private String price = "";

    private int amount ;
 //   private List<Image> images = new ArrayList<Object>();
    private ProductState state = ProductState.Available;
//    private String clientId;


//    public ProductData(String description){
//        this.description = description;
//    }



}
