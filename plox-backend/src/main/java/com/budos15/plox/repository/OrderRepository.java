package com.budos15.plox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.budos15.plox.entity.Orders;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Long> {}
