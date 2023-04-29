import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductsComponent } from './components/inventario/products/products.component';
import { SaleComponent } from './components/ventas/sale/sale.component';
import { UserComponent } from './components/administracion/user/user.component';
import { CloseCashComponent } from './components/caja/close-cash/close-cash.component';
import { SaleProductComponent } from './components/ventas/sale-product/sale-product.component';



const routes: Routes = [
  {path:"", component: LoginComponent, pathMatch:"full"},
  {path:"inicio", component: InicioComponent, pathMatch:"full"},
  {path:"inventario/productos", component:ProductsComponent, pathMatch:"full"},
  {path:"ventas/historial", component:SaleComponent, pathMatch:"full"},
  {path:"administracion/user",component:UserComponent, pathMatch:"full"},
  {path:"caja/cierre", component:CloseCashComponent, pathMatch:"full"},
  {path:"venta",component:SaleProductComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
