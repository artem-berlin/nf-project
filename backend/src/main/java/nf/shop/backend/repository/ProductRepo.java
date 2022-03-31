package nf.shop.backend.repository;

import nf.shop.backend.model.ProductElement;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends MongoRepository<ProductElement, String> {
        List<ProductElement> findAllByClientId(String clientID);
        void deleteProductElementByIdAndClientId(String id, String clientID);


}
