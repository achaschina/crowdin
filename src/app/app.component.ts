import { Component, OnInit } from '@angular/core';

import { ProjectsService } from './services/projects.service';
import { Project } from './models/Project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectsService]
})
export class AppComponent implements OnInit{
  projects: Project[];
  currentProject: Project;
  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.projectService.projects;
  }

  createNewProject() {
    console.log(111)
  }

  getCurrentProject(currentProject: Project) {
    this.currentProject = currentProject;
  }
}
