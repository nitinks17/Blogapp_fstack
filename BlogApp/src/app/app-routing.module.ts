import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddblogComponent } from './addblog/addblog.component';
import { BloglistComponent } from './bloglist/bloglist.component';

import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { ShowsingleComponent } from './showsingle/showsingle.component';
import { UpdateblogComponent } from './updateblog/updateblog.component';



const routes: Routes = [
  {component:HomeComponent,path:"" },


{component:BlogsComponent,path:"blog",
children:[
  {component:BloglistComponent,path:""},
  {component:UpdateblogComponent,path:":id"},
   {component:ShowsingleComponent,path:"single/:id"}
]},
{component:AddblogComponent,path:"add"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
