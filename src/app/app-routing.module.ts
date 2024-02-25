import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/note/note.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import path from 'path';
import { title } from 'process';
import { AboutProjectsComponent } from './components/about-projects/about-projects.component';
import { AboutSponsorsComponent } from './components/about-sponsors/about-sponsors.component';


const routes: Routes = [
  { path:'',redirectTo:"/notes",pathMatch:'full' },
  { path:'notes',title:"Notes" ,component: NotesComponent },
  { path:'notes/:id',title:"Signle Note",component: NoteComponent },
  { path:'about',title:"About",component: AboutComponent,children:[
          {path:'projects',title:'Project',component:AboutProjectsComponent},
          {path:'sponsors',title:'Sponsors',component:AboutSponsorsComponent},
  ],
  },
  { path:'**',title:"404-Page Not found",component:NotFoundComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
