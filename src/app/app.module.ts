import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatIconModule, 
         MatInputModule, 
         MatButtonModule, 
         MatButtonToggleModule, 
         MatRadioModule,
         MatSelectModule,
         MatOptionModule, 
         MatCheckboxModule,
         MatTableModule} from '@angular/material'

import { AppComponent } from './app.component';
import { ProjectsService } from './services/projects.service';
import { CurrentProjectSettingsComponent } from './current-project-settings/current-project-settings.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { LanguageService } from './services/languages.service';


const appRoutes: Routes = [
  {
    path: 'projects/:id',
    component: CurrentProjectSettingsComponent
  },
  {
    path: 'new-project',
    component: NewProjectComponent
  },
  {
    path: 'profile',
    component: UserAccountComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CurrentProjectSettingsComponent,
    NewProjectComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProjectsService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
