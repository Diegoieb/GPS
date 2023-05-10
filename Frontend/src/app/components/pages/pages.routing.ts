import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { UserComponent } from './administracion/user/user.component';
import { CloseCashComponent } from './caja/close-cash/close-cash.component';
import { ProductsComponent } from './inventario/products/products.component';
import { SaleProductComponent } from './ventas/sale-product/sale-product.component';
import { SaleComponent } from './ventas/sale/sale.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
     
      {
        path: "inicio",
        component: InicioComponent,
     
      },
      {
        path: "inventario/productos",
        component: ProductsComponent,
     
      },

      {
        path: "ventas/historial",
        component: SaleComponent,
        
      },

      {
        path: "administracion/user",
        component: UserComponent,
       
      },

      {
        path: "caja/cierre",
        component: CloseCashComponent,
       
      },

      {
        path: "venta",
        component: SaleProductComponent,
        
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
