package nf.shop.backend.model;

import lombok.Data;

@Data
public class RegisterData
{
    private String email;
    private String password;
    private String  passwordAgain;

}


