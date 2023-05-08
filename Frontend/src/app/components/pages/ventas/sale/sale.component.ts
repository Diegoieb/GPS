import { Component } from '@angular/core';
import { SaleService } from 'src/app/service/sale.service';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {

  total: number=0;
  result: any;
  saleProducts: any[]=[];
  cols: any[]=[];
  constructor(private saleService: SaleService) {}

    ngOnInit() {
        this.saleService.getSale().subscribe((data) => {
            this.result=data;
            this.saleProducts = this.result.sale;
            console.log(this.saleProducts);
        });
        this.cols = [
          { field: 'date', header: 'Fecha' },
          { field: 'total', header: 'Total' }
      ];
    }
}
