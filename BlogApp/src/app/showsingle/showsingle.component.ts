import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogdataService } from '../services/blogdata.service';

@Component({
  selector: 'app-showsingle',
  templateUrl: './showsingle.component.html',
  styleUrls: ['./showsingle.component.css']
})
export class ShowsingleComponent implements OnInit {
singleid:any;
blogarr:any;
  constructor(private route:ActivatedRoute,
    private blogdata:BlogdataService) { }


  ngOnInit(): void {
    this.singleid=this.route.snapshot.paramMap.get("id")
    this.blogdata.showsingleblog(this.singleid).subscribe((res:any)=>{
      console.log("res",res)
      this.blogarr=res
    })
  }

}
