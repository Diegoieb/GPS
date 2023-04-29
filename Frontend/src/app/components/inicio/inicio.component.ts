import { Component } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})



export class InicioComponent {
  producto: any[]=[];
  productoD: any;
  productFinal: any[]=[];

constructor(private productoS: ProductoService){
}
ngOnInit(){
  this.productoS.getProduct().subscribe(data=>{
    this.productoD=data;
    console.log(data);
    this.producto= this.productoD.product;
    this.productFinal= this.producto.filter((productF)=>productF.stock<10);

    console.log(this.producto);
  });
  }



}
