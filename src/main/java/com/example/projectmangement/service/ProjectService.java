package com.example.projectmangement.service;


import com.example.projectmangement.model.Project;
import com.example.projectmangement.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveProject(Project project){
        return projectRepository.save(project);
    }

    public List<Project>getAllProjects(){
        return projectRepository.findAll();
    }
}
