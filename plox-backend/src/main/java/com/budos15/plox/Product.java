package com.budos15.plox;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long prodId;
    private String prodName;
    private String prodDescription;
    private Long prodPrice;

    public Long getProdId(){
        return prodId;
    }

    public void setProdId(Long prodId){
        this.prodId = prodId;
    }

    public String getProdName(){
        return prodName;
    }

    public void setProdName(String prodName){
        this.prodName = prodName;
    }

    public String getProdDescription(){
        return prodDescription;
    }

    public void setProdDescription(String prodDescription){
        this.prodDescription = prodDescription;
    }

    public Long getProdPrice(){
        return prodPrice;
    }

    public void setProdPrice(Long prodPrice){
        this.prodPrice = prodPrice;
    }
}
