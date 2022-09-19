import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogdataService } from '../services/blogdata.service';

@Component({
  selector: 'app-updateblog',
  templateUrl: './updateblog.component.html',
  styleUrls: ['./updateblog.component.css']
})
export class UpdateblogComponent implements OnInit {
id:any;
updateddata:any;
updateit(data:any){
  this.updateddata=data;
  this.id=this.route.snapshot.paramMap.get("id")
      

       this.singleblog.updateblogdata(this.id,this.updateddata).subscribe((res)=>{
        console.log("res",res)
       })
       console.log("updates",this.updateddata)
       alert("updated successfully")

}


  constructor(private route:ActivatedRoute,
    private singleblog:BlogdataService) { 
      
    
     }
singleid:any;
x:any;
  ngOnInit(): void {
   console.log("agaya")
   this.singleid=this.route.snapshot.paramMap.get("id")
   console.log(this.singleid)
   this.singleblog.getsingleblog(this.singleid).subscribe((res=>{
    console.log("fdfdf",res)
    this.x=res;
    console.log(this.x)
   }))
  }

}
