package nf.shop.backend.service;

import lombok.RequiredArgsConstructor;
import nf.shop.backend.repository.ShoppingCartRepository;
import nf.shop.backend.shoppingcart.ShoppingCart;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ShoppingCartService {


    private final ShoppingCartRepository shoppingCartRepository;

    public Collection<ShoppingCart>getShoppingCartList() {
        return shoppingCartRepository.findAll();
    }

    public void deleteShoppingCart(String id) {
        shoppingCartRepository.deleteById(id);
    }

    public ShoppingCart addShoppingCart(ShoppingCart shoppingCart) {
        if (shoppingCartRepository.findByShoppingCartName(shoppingCart.getShoppingCartName()).isEmpty()){
            return shoppingCartRepository.save(shoppingCart);
        }
        throw new IllegalArgumentException("Shopping Cart exist yet");
    }

    public ShoppingCart getShoppingCartById(String id) {
        Optional<ShoppingCart> shoppingCart = shoppingCartRepository.findById(id);
        return shoppingCart.orElseGet(ShoppingCart::new);
    }

    public void changeShoppingCart(String id, ShoppingCart changedShoppingCart) {
        Optional<ShoppingCart> shoppingCart = shoppingCartRepository.findById(id);
        if (shoppingCart.isPresent()){
            ShoppingCart catUnwrapped = shoppingCart.get();
            catUnwrapped.setShoppingCartName(changedShoppingCart.getShoppingCartName());
            shoppingCartRepository.save(catUnwrapped);
        }
    }
}


