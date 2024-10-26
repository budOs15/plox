package com.budos15.plox;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;

@SpringBootApplication
@ComponentScan(basePackages = {
	"com.budos15.plox.plox-backend.controller.UserController",
	"com.budos15.plox.plox-backend.controller.VendorController",
	"com.budos15.plox.plox-backend.controller.ProductController",
	"com.budos15.plox.plox-backend.controller.OrderController",
	"com.budos15.plox.plox-backend.controller.CartController"
})
public class PloxApplication {

	public static void main(String[] args) {
		SpringApplication.run(PloxApplication.class, args);
	}
}