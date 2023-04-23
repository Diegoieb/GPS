import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name : any;
  password : any;
  //crear modelo de interface
  //@Output() datos = new EventEmitter<Login>();//enviar datos al componente padre
  constructor(private router: Router){

  }

  login(){
    console.log(this.name);
    console.log(this.password);
    if(this.name=="admin"&& this.password=="user"){
      this.router.navigate(['inicio']);
    }else{
      alert('Dato incorrecto');
    }
    //creo objeto para enviarlo
    //const datos: Login= {name: this.name,password:this.password}
    //this.datos.emit(datos);

  }

}
/*export interface Login{
  name: string;
  password: string;
}*/
