import { AddPlayListComponent } from './add-play-list/add-play-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayPlayListComponent } from "src/app/display-play-list/display-play-list.component";


const routes: Routes = [
  {
    path:"addsong",
    component:AddStudentComponent
  },
  {
    path:"addplaylist",
    component:AddPlayListComponent
  },
  {
    path:"displayplaylist",
    component:DisplayPlayListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
