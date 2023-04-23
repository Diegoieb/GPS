import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const uri ="http://localhost:3000/api/sale";

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }
  getSale(){
    return this.http.get(uri);
  }
  insertSale(sale: any){
    this.http.post(uri, sale).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  deleteSale(id:string){
    this.http.delete(`${uri}/${id}`).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  updateSale(sale: any, id: string){
    this.http.put(`${uri}/${id}`, sale).subscribe(res=>{
      console.log(res);
    }, err=>{
      console.log(err);
    })
  }
  searchByIdSale(id:string){
    return this.http.get(`${uri}/${id}`);
  }

}
