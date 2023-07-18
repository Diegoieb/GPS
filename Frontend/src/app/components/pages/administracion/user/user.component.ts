import { Component } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

element:any;
productos:any;
return: any;
constructor(private product : ProductoService){

}

ngOnInit(): void {
  this.product.getProduct().subscribe(respuesta => {
    this.return = respuesta;
    this.productos= this.return.product.length;
 
    
  });
}


  pdf(): void {

    // Configurar opciones de html2pdf
    const options = {
      filename: 'Reportes.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 6 },
      jsPDF: { unit: 'in', format: 'legal', orientation: 'portrait' }
      
    };
  
    // Esperar un breve período de tiempo antes de obtener el elemento y generar el PDF
    setTimeout(() => {
      this.element = document.getElementById("Reportes");
      console.log(this.element);
      if (this.element) {
        (window as any).html2pdf(this.element, options);
        
      }
    }, 900);
   
  };
}
