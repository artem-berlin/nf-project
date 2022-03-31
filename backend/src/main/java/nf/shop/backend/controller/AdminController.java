package nf.shop.backend.controller;

import nf.shop.backend.service.ClientService;
import nf.shop.backend.model.ClientData;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final ClientService clientService;

//    @GetMapping
//    public String printAdminInfo(Principal principal){
//        ClientData admin = clientService.findByEmail(principal.getName()).orElseThrow();
//        return "AdminInfo: " + admin.getEmail();
//    }

}
