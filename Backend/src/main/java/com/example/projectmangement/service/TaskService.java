package com.example.projectmangement.service;


import com.example.projectmangement.model.Task;
import com.example.projectmangement.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Task saveTask(Task task){
        return taskRepository.save(task);

    }

    public List<Task> getAllTasks(){
        return taskRepository.findAll();
    }
}
