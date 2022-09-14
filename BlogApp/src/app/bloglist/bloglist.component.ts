import { Component, OnInit } from '@angular/core';
import {BlogdataService} from "../services/blogdata.service"
@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  blogdata:any;
  constructor(private blogData:BlogdataService) { }

  ngOnInit(): void {
    this.getblogdata()
  }
  getblogdata(){
    this.blogData.getblogdata()
    
    .subscribe((res)=>{
        console.log(res)
         this.blogdata=res;
    
     })
  }

  deleteblog(id:any){
    // console.log("id",id)
    this.blogData.deleteblogdata(id).subscribe((res)=>{
      this.getblogdata()
      console.log(res)
    })
    
  }

}
