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

searchProductCode(code:number){
  this.productService.getProductByCode(code).subscribe(data=>{
    this.idProduct=data;
  })
}

createSale(){
  const total=Number;
  const date= new Date;
  const user="";
  const sale={date: date, total:total, user:user};
  this.saleService.insertSale(sale);
}

insertSale(){
  let product={product:this.searchProductCode(this.code), sale:this.createSale(),amountP:this.amountP, subTotal:this.subTotal}
  this.saleProduct.insertSaleProduct(product);
  alert("Venta realizada con exito");
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
