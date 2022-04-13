package nf.shop.backend.controller;

import lombok.RequiredArgsConstructor;
import nf.shop.backend.product.ProductData;
import nf.shop.backend.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Collection;

@RestController
@RequestMapping("/api/main")
@RequiredArgsConstructor
@CrossOrigin
public class MainPageController {
    private final ProductService productService;


    @GetMapping
    public Collection<ProductData> getProductList(Principal principal) {
        return productService.getProductList(principal);
    }

    @GetMapping("/{id}")
    public ProductData getProductDataById(@PathVariable String id){
        return productService.getProductDataById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Collection<ProductData> addProduct(@RequestBody ProductData productData, Principal principal) {
        productService.addProduct(productData, principal);
        return productService.getProductList(principal);
    }

    @PutMapping("/{id}")
    public Collection<ProductData> changeProduct(@PathVariable String id, @RequestBody ProductData product, Principal principal) {
       productService.changeProduct(id, product);
       return productService.getProductList(principal);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable String id, Principal principal) {
        productService.deleteProduct(id, principal);
    }

    @DeleteMapping()
    public Collection<ProductData> deleteCheckedProduct(Principal principal) {
        productService.deleteCheckedProduct();
        return productService.getProductList(principal);
    }

}
