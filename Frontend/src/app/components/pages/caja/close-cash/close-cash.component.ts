import { Component, OnInit } from '@angular/core';
import { SaleService } from 'src/app/service/sale.service'; 

@Component({
  selector: 'app-close-cash',
  templateUrl: './close-cash.component.html',
  styleUrls: ['./close-cash.component.css']
})
export class CloseCashComponent implements OnInit {

  constructor (private saleService: SaleService){ }
ventas:any;
return:any;
  sales: any[] = [];

  ngOnInit(): void {
    this.obtenerVentas();
  }


  obtenerVentas(): void {
    this.saleService.getSale().subscribe(respuesta => {
      this.return = respuesta;
      this.ventas = this.return.sale;
      console.log(this.ventas)
    });

  }
  getSale() {
    this.saleService.getSale().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  confirmDelete(id: string) {
    if (confirm("¿Estás seguro de que deseas eliminar esta venta?")) {
      this.deleteSale(id);
    }
  }

  deleteSale(id: string) {
    // Lógica para eliminar la venta con el ID proporcionado
    this.sales = this.sales.filter(sale => sale.id !== id);
  }
}