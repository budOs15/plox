package com.budos15.plox;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;
    @ManyToOne
    private User userId;
    @ManyToOne
    private Product product;
    private Integer quantity;
    private LocalDateTime orderDate;

    public Long getOrderId(){
        return orderId;
    }

    public void setOrderId(Long orderId){
        this.orderId = orderId;
    }

    public User getUser(){
        return userId;
    }

    public void setUser(User user){
        this.userId = user;
    }

    public Product getProduct(){
        return product;
    }

    public void setProduct(Product product){
        this.product = product;
    }

    public Integer getQuantity(){
        return quantity;
    }

    public void setQuantity(Integer quantity){
        this.quantity = quantity;
    }

    public LocalDateTime getOrderDate(){
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate){
        this.orderDate = orderDate;
    }
}
