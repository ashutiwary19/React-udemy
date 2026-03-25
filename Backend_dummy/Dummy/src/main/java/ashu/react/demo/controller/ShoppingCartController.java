package ashu.react.demo.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/cart")
public class ShoppingCartController {

    @GetMapping("/get")
    public Map<String, String> getCards(){
        Map<String, String> response = new HashMap<>();
        response.put("OK", "YES");
        return response;
    }

}
