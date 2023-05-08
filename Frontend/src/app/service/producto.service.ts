import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

const uri = environment.URI+'/product';
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
    return this.http.put(`${uri}/${id}`,producto);
  }
  getProduct(){
    return this.http.get(uri);
  }
  getProductByCode(code: number){
    return this.http.get(`${uri}/${code}`);
  }
  getProductById(id: string){
    return this.http.get(`${uri}/search/${id}`);
  }
  insertProduct(producto:any){
    return this.http.post(uri,producto);
  }

}
