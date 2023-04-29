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
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { SaleProductComponent } from './components/ventas/sale-product/sale-product.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    ProductsComponent,
    SaleComponent,
    UserComponent,
    CloseCashComponent,
    MenuBarComponent,
    SaleProductComponent
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
    DockModule,
    TableModule,
    ButtonModule,
    MegaMenuModule,
    PanelMenuModule,
    TabMenuModule,
    DialogModule,
    MenubarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
