package com.budos15.plox.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.budos15.plox.entity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    // implement repo
}