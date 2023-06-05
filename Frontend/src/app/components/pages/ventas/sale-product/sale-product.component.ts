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
amountP: number=0;
subTotal: number=0;
idProduct:any;
code: number=0;
result: any;
saleP: any[]=[];
productSale: any []=[];
queryP: any;
queryS: any;



insertProductSale(code: any, amountP: any){
  this.productService.getProductByCode(code).subscribe(data=>{
    this.queryP=data;
    const id=this.queryP.product[0]._id;
    const price = this.queryP.product[0].price;
    const stock = this.queryP.product[0].stock;
    if(!this.productSale.find((item)=>item.product==id)){
      this.productSale.push({product:id,amount:amountP, subTotal:price*amountP,stock:stock});
      console.log(this.productSale);
    }else{
      const pos=this.productSale.findIndex((item)=>item.product==id);
      this.productSale[pos].amount+=amountP;
      this.productSale[pos].subTotal+=amountP*price;
      console.log(this.productSale[pos]);
    }
  });
}
saleProducts(){
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
      if((resta)>=0){
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


deleteSaleP(){

}

updateSaleP(){

}

ngOnInit() {
  this.saleProduct.getSaleProduct().subscribe((data) => {
      this.result = data;
      this.saleP=this.result.product;
  });



}

}
