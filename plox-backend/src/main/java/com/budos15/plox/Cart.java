package com.budos15.plox;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartId;
    @ManyToOne
    private User userId;
    @ManyToOne
    private Product product;
    private Integer quantity;

    public Long getCartId(){
        return cartId;
    }

    public void setCartId(Long cartId){
        this.cartId = cartId;
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

    public Integer getQUantity(){
        return quantity;
    }

    public void setQuantity(Integer quantity){
        this.quantity = quantity;
    }

    public void addItem(Cart cartItem) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    public Order checkout() {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    public void removeItem(Long itemId) {
        throw new UnsupportedOperationException("Unimplemented method 'removeItem'");
    }
}
