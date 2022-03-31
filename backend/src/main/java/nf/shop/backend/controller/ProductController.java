package nf.shop.backend.controller;

import nf.shop.backend.service.ProductService;
import nf.shop.backend.model.ProductElement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Collection;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
@CrossOrigin
public class ProductController {
    private final ProductService productService;


    @GetMapping
    public Collection<ProductElement> getProductList(Principal principal) {
        return productService.getProductList(principal);
    }

    @GetMapping("/{id}")
    public ProductElement getProductElementById(@PathVariable String id){
        return productService.getProductElementById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Collection<ProductElement> addProduct(@RequestBody ProductElement productElement, Principal principal) {
        productService.addProduct(productElement, principal);
        return productService.getProductList(principal);
    }

    @PutMapping("/{id}")
    public Collection<ProductElement> changeProduct(@PathVariable String id, @RequestBody ProductElement product, Principal principal) {
       productService.changeProduct(id, product);
       return productService.getProductList(principal);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable String id, Principal principal) {
        productService.deleteProduct(id, principal);
    }

    @DeleteMapping()
    public Collection<ProductElement> deleteCheckedProduct(Principal principal) {
        productService.deleteCheckedProduct();
        return productService.getProductList(principal);
    }

}
