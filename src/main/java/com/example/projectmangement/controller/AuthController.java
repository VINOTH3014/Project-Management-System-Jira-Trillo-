package com.example.projectmangement.controller;

import com.example.projectmangement.dto.LoginRequest;
import com.example.projectmangement.dto.RegisterRequest;
import com.example.projectmangement.model.User;
import com.example.projectmangement.repository.UserRepository;
import com.example.projectmangement.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request){

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword())); // encode
        user.setRole(request.getRole());

        return userRepository.save(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request){

        System.out.println("LOGIN API HIT");

        User user = userRepository.findByEmail(request.getEmail())
                .orElse(null);

        if(user == null){
            return "User not found";
        }

        if(!passwordEncoder.matches(request.getPassword(), user.getPassword())){
            return "Invalid Password";
        }

        return jwtService.generateToken(user.getEmail());
    }
}