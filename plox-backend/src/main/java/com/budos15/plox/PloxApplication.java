package com.budos15.plox;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude=SecurityAutoConfiguration.class)
public class PloxApplication {

	public static void main(String[] args) {
		SpringApplication.run(PloxApplication.class, args);
	}

}