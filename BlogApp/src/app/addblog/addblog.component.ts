import { Component, OnInit } from '@angular/core';
import { BlogdataService } from '../services/blogdata.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  constructor(private blogData:BlogdataService) { }

  ngOnInit(): void {
  }
getBlogdata(data:any){
  this.blogData.saveblog(data).subscribe((result)=>{
    console.log(result)
    alert("added succesfully")
  })

}
}
