import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import{HttpClientModule} from '@angular/common/http';

import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';

import { MessagesModule } from 'primeng/messages';
import { DockModule } from 'primeng/dock';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { PagesComponent } from './components/pages/pages.component';
import { PagesModule } from './components/pages/pages.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
  ],
  imports: [
    PagesModule,
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
    BrowserAnimationsModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
