package com.budos15.plox;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/vendors")
public class VendorController {
    @Autowired
    private VendorRepository vendorRepository;
    
    @GetMapping
    public List<Vendor> getAllVendors(){
        return vendorRepository.findAll();
    }

    @PostMapping
    public Vendor createVendor(@RequestBody Vendor vendor){
        return vendorRepository.save(vendor);
    }
}
