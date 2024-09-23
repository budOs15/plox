package com.budos15.plox;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Vendor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long vendorId;
    private String vendorName;
    private String vendorEmail;
    private String vendorPhoneNum;
    private String vendorAddress;

    public Long getVendorId(){
        return vendorId;
    }

    public void setVendorId(Long vendorId){
        this.vendorId = vendorId;
    }

    public String getVendorName(){
        return vendorName;
    }

    public void setVendorName(String vendorName){
        this.vendorName = vendorName;
    }

    public String getVendorEmail(){
        return vendorEmail;
    }

    public void setVendorEmail(String vendorEmail){
        this.vendorEmail = vendorEmail;
    }

    public String getVendorPhoneNum(){
        return vendorPhoneNum;
    }

    public void setUserPhoneNum(String vendorPhoneNum){
        this.vendorPhoneNum = vendorPhoneNum;
    }

    public String getVendorAddress(){
        return vendorAddress;
    }

    public void setVendorAddress(String vendorAddress){
        this.vendorAddress = vendorAddress;
    }
}
