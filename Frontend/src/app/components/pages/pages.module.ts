import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { UserComponent } from './administracion/user/user.component';
import { CloseCashComponent } from './caja/close-cash/close-cash.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './inventario/products/products.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SaleComponent } from './ventas/sale/sale.component';
import { SaleProductComponent } from './ventas/sale-product/sale-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DockModule } from 'primeng/dock';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    
    InicioComponent,
    UserComponent,
    CloseCashComponent,
    HeaderComponent,
    ProductsComponent,
    MenuBarComponent,
    SidebarComponent,
    SaleComponent,
    SaleProductComponent,
   
  
  ],exports: [
   
        
    InicioComponent,
    UserComponent,
    CloseCashComponent,
    HeaderComponent,
    ProductsComponent,
    MenuBarComponent,
    SidebarComponent,
    SaleComponent,
    SaleProductComponent,
   
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
  

 
  ]
})
export class PagesModule { }
