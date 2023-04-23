import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const uri = "http://localhost:3000/api/saleProduct";

@Injectable({
  providedIn: 'root'
})
export class SaleProductService {

  constructor(private http: HttpClient) { }

  getSaleProduct(){
    return this.http.get(uri);
  }
  insertSaleProduct(saleProduct: any){
    this.http.post(uri, saleProduct).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  deleteSaleProduct(id: string){
    this.http.delete(`${uri}/${id}`).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  updateSaleProduct(saleProduct: any, id:string){
    this.http.put(`${uri}/${id}`, saleProduct).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  searchByIdSale(id:string){
    return this.http.get(`${uri}/${id}`);
  }
}
