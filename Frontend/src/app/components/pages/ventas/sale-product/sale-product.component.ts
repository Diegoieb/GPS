import { Component } from '@angular/core';
import { SaleProductService } from 'src/app/service/sale-product.service';
import { SaleService } from 'src/app/service/sale.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-sale-product',
  templateUrl: './sale-product.component.html',
  styleUrls: ['./sale-product.component.css']
})
export class SaleProductComponent {

cols:any;
constructor(private saleProduct:SaleProductService, private saleService:SaleService, private productService: ProductoService){}
amountP: number=0;//number=0
subTotal: number=0;
idProduct:any;
code: number=0;//number=0
result: any;
saleP: any[]=[];
productSale: ProductSale[]=[];
queryP: any;
queryS: any;
codeS:any;
amountPS:any;
codeU: number=0;


visible: boolean=false;
mostrar: boolean=false;

mostrarDialogo(code:number){
  this.codeU=code;
  this.mostrar=true;
}

showDialog() {
    this.visible = true;
}


buscaProductoInsertarVenta(code: number, amountP: number){
  this.productService.getProductByCode(code).subscribe(data=>{
    this.queryP=data;
    const id=this.queryP.product[0]._id;
    const price = this.queryP.product[0].price;
    const stock = this.queryP.product[0].stock;
    if(!this.productSale.find((item)=>item.product==id)){
      if(Number(amountP)<=Number(stock)){
        this.productSale.push({product:id,amount:amountP, subTotal:price*amountP,stock:stock, code:code});
        this.visible=false;
      }else{
        alert("Producto bajo stock");
      }
    }else{
      const pos=this.productSale.findIndex((item)=>item.product==id);
      if(Number(this.productSale[pos].amount)<Number(stock)){
        this.productSale[pos].amount=Number(this.productSale[pos].amount)+Number(amountP);
        this.productSale[pos].subTotal+=amountP*price;
        console.log(this.productSale[pos]);
        this.visible=false;
      }else{
        alert("Producto bajo stock");
      }
    }
  });
}
closeSale(){
  //reduce(), funciona como un sumador, en una sola linea
  const total= this.productSale.filter((item)=>item.subTotal>0).reduce((sum,item)=>sum+item.subTotal,0);
  const date= new Date;
  //arreglar user-->extraer de sesion
  const user='64341924c0b5c5dfba6db09b';
  const sale={date: date, total:total, user:user};
  this.saleService.insertSale(sale).subscribe(venta=>{
    this.queryS= venta;
    const id= this.queryS.saleStore._id;
    this.productSale.map((item)=>{
      const resta= item.stock-item.amount;
      console.log(item.amount);
      const objFinal= {product:item.product,sale:id,amountP:item.amount, subTotal:item.subTotal};
      console.log(resta);
      if((resta)>=0){
        console.log(resta);
        this.productService.updateProduct({stock:resta},item.product);
        this.saleProduct.insertSaleProduct(objFinal);
      }else{
        alert('No es posible generar la venta, producto agotado');
      }
    })
    this.productSale=[];
  });
  //vaciar arreglo
}


deleteP(code:number){
  this.productSale=this.productSale.filter(producto=>producto.code!=code);
}

cantity:number=0;
updateP(cantity:number){
  this.productSale.map(producto=>{
    if(producto.code===this.codeU){
      console.log(producto);
      if(Number(cantity)<=Number(producto.stock)){
        producto.amount=cantity;
        this.mostrar=false;
      }else{
        alert("Cantidad mayor al stock disponible");
      }
    }
  });
}

producto: any;
nombreProducto:any;
busqueda:boolean=false;
descripcion:any;
precio:any;
searchProduct(code:any){
  try{
  this.productService.getProductByCode(code).subscribe((data)=>{
    this.busqueda=true;
    this.producto=data;
    this.nombreProducto=this.producto.product[0].name;
    this.descripcion=this.producto.product[0].description;
    this.precio=this.producto.product[0].price;
    //console.log(this.producto);
    //console.log(this.nombreProducto);
  })}catch(err){
    this.busqueda=false;
  }
}


ngOnInit() {
  this.saleProduct.getSaleProduct().subscribe((data) => {
      this.result = data;
      this.saleP=this.result.product;
  });
}



}

export interface ProductSale{
  code:number;
  product:string;
  amount:number;
  subTotal:number;
  stock:number;
}
