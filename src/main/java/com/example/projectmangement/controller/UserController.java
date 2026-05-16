package com.example.projectmangement.controller;


import com.example.projectmangement.model.User;
import com.example.projectmangement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

            @PostMapping
    public User createUser(@RequestBody User user){
        return userService.saveUser(user);
            }
            @GetMapping
    public List<User> getUsers(){
        return userService.getAllUsers();
            }
}
