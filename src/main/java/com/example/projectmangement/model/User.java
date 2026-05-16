package com.example.projectmangement.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Entity
@Table(name="users")
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true, nullable = false)   // email unique
    private String email;

    private String password;

    private String role;

    @Column(name="created_at", insertable=false, updatable=false)
    private LocalDateTime createdAt;
}