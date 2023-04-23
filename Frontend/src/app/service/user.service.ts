import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const uri = "http://localhost:3000/api/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(uri);
  }
  insertUser(user:any){
    this.http.post(uri, user).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  deleteUser(id:string){
    this.http.delete(`${uri}/${id}`).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  updateUser(user:any, id:string){
    this.http.put(`${uri}/${id}`,user).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  searchByIdUser(id:string){
    return this.http.get(`${uri}/${id}`);
  }
}
