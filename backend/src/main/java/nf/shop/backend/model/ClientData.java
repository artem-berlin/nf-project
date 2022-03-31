package nf.shop.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "clients")
@Data
public class ClientData {

    @Id
    private String id;
    private String email;
    private String password;
    private String clientname;   //double???
    private String role = "Client";
}
