package com.example.projectmangement.controller;

import com.example.projectmangement.model.Project;
import com.example.projectmangement.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

  @PostMapping
    public Project createProject(@RequestBody Project project){
      return projectService.saveProject(project);
  }

  @GetMapping
    public List<Project> getProjects(){
      return projectService.getAllProjects();
  }
}


