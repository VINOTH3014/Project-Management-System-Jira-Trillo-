package com.example.projectmangement.repository;

import com.example.projectmangement.model.Project;
import com.example.projectmangement.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
