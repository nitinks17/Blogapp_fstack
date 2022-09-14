import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Datatype } from '../datatypeinterface';
@Injectable({
  providedIn: 'root'
})
export class BlogdataService {

  constructor(private http:HttpClient) { }
  getblogdata():Observable<Datatype[]>{
   return this.http.get<Datatype[]>(`http://localhost:2000/blogs`)
  
  }

  saveblog(data:any){
    return this.http.post<Datatype>(`http://localhost:2000/blogs`,data)
  }

  deleteblogdata(id:any){
    return this.http.delete(`http://localhost:2000/blogs/${id}`)
  }

  updateblogdata(id:any,data:any){
   
    return this.http.put(`http://localhost:2000/blogs/${id}`,data)
  }
}
