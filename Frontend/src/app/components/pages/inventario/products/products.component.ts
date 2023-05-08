import { Component } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import {Message} from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  //variable global se define en formato tipescript
  name: any;
  description: any;
  price: any;
  code: any;
  stock: any;
  messages: Message[]=[];
  id:string="";
  rest: any;


  products: any[]=[];
  return: any;
  visible: boolean=false;
  insert:boolean=false;
  update:boolean=false;
  constructor(private serviceProduct: ProductoService, private http: HttpClient, private router:Router){}

  crearProducto(){
    this.update=false;
    this.insert=true;
    const producto = {name: this.name, description: this.description, price: this.price, code: this.code, stock: this.stock};
    this.http.post('http://localhost:3000/api/product', producto).subscribe(res=>{
      console.log(res);
      alert("Ingresado correctamente");
      window.location.reload();
      //this.messages = [{ severity: 'success', summary: 'Success', detail: 'Agregado Exitosamente' }];
    },err=>{
      console.log(err);
      alert('Error al ingresar producto');
      //this.messages = [{ severity: 'error', summary: 'Error', detail: 'Error al ingresar' }];
    })
  }
  ngOnInit(){
    this.serviceProduct.getProduct().subscribe((data) => {
    this.return = data;
    this.products= this.return.product;
    console.log(this.products);
  });
  }
  //revisar error delete()
  /*
  deleteProduct(id: string){
    this.serviceProduct.deleteProduct(id);
  }*/

eliminarP(id:string){
 /* this.http.delete(`http://localhost:3000/api/product/${id}`).subscribe(product=>{
    alert("logrado");
  },err=>{
    alert("no logrado");
  })*/
  this.serviceProduct.deleteProduct(id);
  window.location.reload();
}

  mostrarDatosActualizar(id:string) {
      this.update=true;
      this.insert=false;
      this.id=id;
      this.visible = true;
      this.http.get(`http://localhost:3000/api/product/search/${id}`).subscribe(res=>{
        this.rest=res;
        this.name=this.rest.product.name;
        this.description=this.rest.product.description;
        this.price=this.rest.product.price;
        this.code=this.rest.product.code;
        this.stock=this.rest.product.stock;
      },err=>{
        alert("No");
      })
}

updateProduct(id:string){
  const product= {name:this.name, description:this.description, price:this.price, code:this.code, stock:this.stock};
  this.http.put(`http://localhost:3000/api/product/${id}`, product).subscribe(res=>{
    alert("Actualizado con exito");
    window.location.reload();
  },err=>{
    alert("Error al actualizar");
  })
  console.log(id);
}

mostrarDatosInsertar(){
  this.insert=true;
  this.update=false;
  //activar modal, para que los datos a ingresar se muestren
  this.visible=true;
}

}


