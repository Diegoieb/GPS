import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import{HttpClientModule} from '@angular/common/http';

import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/inventario/products/products.component';
import { SaleComponent } from './components/ventas/sale/sale.component';
import { UserComponent } from './components/administracion/user/user.component';
import { CloseCashComponent } from './components/caja/close-cash/close-cash.component';
import { MessagesModule } from 'primeng/messages';
import { DockModule } from 'primeng/dock';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    ProductsComponent,
    SaleComponent,
    UserComponent,
    CloseCashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    MessagesModule,
    DockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
