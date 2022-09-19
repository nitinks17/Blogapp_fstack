import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { AddblogComponent } from './addblog/addblog.component';
import { FormsModule } from '@angular/forms';
import { UpdateblogComponent } from './updateblog/updateblog.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { ShowsingleComponent } from './showsingle/showsingle.component';


@NgModule({
  declarations: [
    AppComponent,
   
    BlogsComponent,
        HomeComponent,
        AddblogComponent,
        UpdateblogComponent,
        BloglistComponent,
        ShowsingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
