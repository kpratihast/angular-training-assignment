import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpostComponent } from './addpost/addpost.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EditpostComponent } from './editpost/editpost.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { ViewpostComponent } from './viewpost/viewpost.component';

const routes: Routes = [
  {
    path: "newpost", component: AddpostComponent
  },
  {
    path: "", component: ViewpostComponent
  },
  {
    path: "postdetails/:id", component: PostdetailsComponent
  },
  {
    path: "login", component: AdminloginComponent
  },
  {
    path: "edit/:id", component: EditpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
