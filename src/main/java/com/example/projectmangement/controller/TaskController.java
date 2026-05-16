package com.example.projectmangement.controller;

import com.example.projectmangement.model.Task;
import com.example.projectmangement.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public Task createTask(@RequestBody Task task){
        return taskService.saveTask(task);
    }

    @GetMapping
    public List<Task> getTasks(){
        return taskService.getAllTasks();
    }
}
