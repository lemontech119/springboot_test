package com.example.sql;

import com.example.sql.api.ApiDao;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Slf4j
@RestController
@SpringBootApplication
public class SqlApplication {
    @Autowired
    private ApiDao apiDao;

    @GetMapping(path = "/helloWorld")
    public String helloWorld(){
        return String.format("%s", apiDao.selectName());
    }

    @GetMapping(path = "/")
    public String test(){
        return "aws test";
    }

    public static void main(String[] args) {
        SpringApplication.run(SqlApplication.class, args);
        System.out.println("test1");
    }

}
