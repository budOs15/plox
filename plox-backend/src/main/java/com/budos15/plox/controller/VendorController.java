package com.budos15.plox.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.budos15.plox.entity.Vendor;
import com.budos15.plox.repository.VendorRepository;


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

    //add put and delete
}
