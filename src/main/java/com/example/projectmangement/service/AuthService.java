package com.example.projectmangement.service;


import com.example.projectmangement.dto.LoginRequest;
import com.example.projectmangement.model.User;
import com.example.projectmangement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String login(LoginRequest loginRequest){

        User user = userRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if(passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())){
            return "Login Success";
        } else {
            throw new RuntimeException("Invalid Password");
        }
    }
}