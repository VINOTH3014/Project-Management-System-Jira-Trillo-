package com.example.projectmangement.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name="projects")
@Getter
@Setter
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="project_name", nullable=false)
    private String projectName;

    @Column(name="description", nullable=true)
    private String description;

    @Column(name="start_date", nullable=false)
    private LocalDate startDate;

    @Column(name="end_date", nullable=false)
    private LocalDate endDate;

    @Column(nullable=false)
    private String status;

    // Correct foreign key mapping to users.id
    @ManyToOne
    @JoinColumn(name="created_by", referencedColumnName="id")
    private User createdByUser;

    // Timestamp column
    @Column(name="created_at", insertable=false, updatable=false)
    private LocalDateTime createdAt;

    public Project() {}

    public Project(String projectName, String description, LocalDate startDate, LocalDate endDate, String status, User createdByUser) {
        this.projectName = projectName;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.createdByUser = createdByUser;
    }
}