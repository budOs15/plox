package com.budos15.plox;

import org.springframework.data.jpa.repository.JpaRepository;

public class JpaRepositories {
    public interface UserRepository extends JpaRepository<User, Long>{}
    public interface VendorRepository extends JpaRepository<Vendor, Long> {}
    public interface ProductRepository extends JpaRepository<Product, Long> {}
    public interface OrderRepository extends JpaRepository<Order, Long> {}
    public interface CartRepository extends JpaRepository<Cart, Long> {}
}
