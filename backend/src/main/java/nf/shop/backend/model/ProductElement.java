package nf.shop.backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "product")
@Data
@NoArgsConstructor
public class ProductElement {

    @Id
    private String id;
    private String title = "";
    private String text = "";
    private String description = "";
    private String city = "";
    private String price = "";     // Integer???
 //   private List<Image> images = new ArrayList<Object>();
    private ProductState state = ProductState.Available;
    private String clientId;


    public ProductElement(String description){
        this.description = description;
    }


}
