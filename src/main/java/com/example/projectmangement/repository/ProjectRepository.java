package com.example.projectmangement.repository;

import com.example.projectmangement.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
