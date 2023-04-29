import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const uri ="http://localhost:3000/api/product";
@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  constructor(private http: HttpClient) {}


  deleteProduct(id: string){
    //contatenacion de varios elementos
    this.http.delete(`${uri}/${id}`).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  updateProduct(producto: any, id: string){
    this.http.put(`${uri}/${id}`,producto).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  getProduct(){
    return this.http.get(uri);
  }
  getProductByCode(code: number){
    return this.http.get(`${uri}/${code}`);
  }
  getProductById(id: string){
    return this.http.get(`${uri}/${id}`)
  }

}
