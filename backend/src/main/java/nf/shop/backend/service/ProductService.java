package nf.shop.backend.service;

import lombok.RequiredArgsConstructor;
import nf.shop.backend.model.ClientData;
import nf.shop.backend.model.ProductElement;
import nf.shop.backend.model.ProductState;
import nf.shop.backend.repository.ClientRepository;
import nf.shop.backend.repository.ProductRepo;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.Collection;
import java.util.List;
import java.util.Optional;


@RequiredArgsConstructor
@Service
public class ProductService {

    private final ProductRepo productRepo;
    private final ClientRepository clientRepository;

    public void addProduct(ProductElement productElement, Principal principal) {
        productElement.setClientId(getClientID(principal));
        productRepo.save(productElement);
    }

    public ProductElement getProductElementById(String id) {
        Optional<ProductElement> product = productRepo.findById(id);
        if (product.isPresent()){
           return product.get();
        }
        return new ProductElement();
    }

    public Collection<ProductElement>getProductList(Principal principal) {
        return productRepo.findAllByClientId(getClientID(principal));
    }

    public void deleteProduct(String id, Principal principal){
        productRepo.deleteProductElementByIdAndClientId(id, getClientID(principal));
    }

    public void changeProduct(String id, ProductElement changedProduct){
        Optional<ProductElement> product = productRepo.findById(id);
        if (product.isPresent()){
            ProductElement productUnwrapped = product.get();
            productUnwrapped.setTitle(changedProduct.getTitle());
            productUnwrapped.setState(changedProduct.getState());
            productUnwrapped.setText(changedProduct.getText());
            productRepo.save(productUnwrapped);
        }
    }

    public void deleteCheckedProduct() {
        productRepo.findAll().stream().filter(product -> product.getState() == ProductState.Available)
                .toList()
                .forEach(product -> productRepo.delete(product));
    }

    public List<ProductElement> findAllByClientId(String email){
        Optional<ClientData> elem = clientRepository.findByEmail(email);
        if (elem.isPresent()){
            return productRepo.findAllByClientId(elem.get().getId());
        }
        throw new IllegalArgumentException("Client doesnt exist!");
    }

    private String getClientID(Principal principal) {
        return clientRepository.findByEmail(principal.getName()).get().getId();
    }



}
