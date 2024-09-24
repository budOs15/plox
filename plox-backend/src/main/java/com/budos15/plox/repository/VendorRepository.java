package com.budos15.plox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.budos15.plox.entity.Vendor;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long> {}