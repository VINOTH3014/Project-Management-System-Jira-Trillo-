package com.example.projectmangement.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name="tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="task_name")
    private String taskName;

    @Enumerated(EnumType.STRING)
    private Status status;

    @ManyToOne
    @JoinColumn(name="assigned_to")  // maps to users.id
    private User assignedUser;

    @ManyToOne
    @JoinColumn(name="project_id")  // maps to projects.id
    private Project project;

    @Column(name="priority")
    private String priority;

    @Column(name="due_date")
    private LocalDate dueDate;

    @Column(name="created_at", insertable=false, updatable=false)
    private java.sql.Timestamp createdAt;

    public Task(){}
}