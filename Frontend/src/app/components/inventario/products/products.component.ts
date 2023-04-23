import { Component } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import {Message} from 'primeng/api';
import { HttpBackend, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  //variable global se define en formato tipescript
  name: string="";
  description: string="";
  price: number=0;
  code: number=0;
  stock: number=0;
  estado: boolean = false;
  messages: Message[]=[];
  constructor(private serviceProduct: ProductoService, private http: HttpClient){}

  crearProducto(){
    const producto = {name: this.name, description: this.description, price: this.price, code: this.code, stock: this.stock};
    this.http.post('http://localhost:3000/api/product', producto).subscribe(res=>{
      console.log(res);
      return true;
      this.estado=true;
      this.messages = [{ severity: 'success', summary: 'Success', detail: 'Agregado Exitosamente' }];
    },err=>{
      console.log(err);
      alert('Error al ingresar producto');
      this.estado=true;
      this.messages = [{ severity: 'error', summary: 'Error', detail: 'Error al ingresar' }];
    })
    return false;
  }

}

