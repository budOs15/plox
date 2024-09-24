package com.budos15.plox;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String userName;
    private String userFirstName;
    private String userLastName;
    private String userPassword;
    private String userEmail;
    private String userAddress;
    private String userPhoneNum;

    public Long getUserId(){
        return userId;
    }

    public void setUserId(Long userId){
        this.userId = userId;
    }

    public String getUserName(){
        return userName;
    }

    public void getUserName(String userName){
        this.userName = userName;
    }

    public String getUserFirstName(){
        return userFirstName;
    }

    public void setUserFirstName(String userFirstName){
        this.userFirstName = userFirstName;
    }

    public String getUserLastName(){
        return userLastName;
    }

    public void setUserLastName(String userLastName){
        this.userLastName = userLastName;
    }

    public String getUserPassword(){
        return userPassword;
    }
    
    public void serUserPassword(String userPassword){
        this.userPassword = userPassword;
    }

    public String getUserEmail(){
        return userEmail;
    }

    public void setUserEmail(String userEmail){
        this.userEmail = userEmail;
    }

    public String getUserAddress(){
        return userAddress;
    }

    public void setUserAddress(String userAddress){
        this.userAddress = userAddress;
    }

    public String getUserPhoneNum(){
        return userPhoneNum;
    }

    public void setUserPhoneNum(String userPhoneNum){
        this.userPhoneNum = userPhoneNum;
    }
}
