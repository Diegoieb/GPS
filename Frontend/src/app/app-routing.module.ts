import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PagesRoutingModule } from './components/pages/pages.routing';




const routes: Routes = [
  {path:"**", component: LoginComponent, pathMatch:"full"},
  {path:"", component: LoginComponent, pathMatch:"full"},
  
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  PagesRoutingModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
