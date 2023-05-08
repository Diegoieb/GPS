import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})

export class MenuBarComponent {

  items: MenuItem[]=[];

  ngOnInit() {
      this.items = [
          {
              label: 'Venta',
              icon: 'pi pi-fw pi-dollar',
              routerLink: '../venta'
          },
          {
              label: 'Producto',
              icon: 'pi pi-fw pi-box',
              routerLink: '../inventario/productos'
          },
          {
              label: 'Caja',
              icon: 'pi pi-fw pi-inbox',
              routerLink:'../caja/cierre'
          },
          {
            label: 'Adminitrador',
            icon: 'pi pi-fw pi-user',
            routerLink:'../administracion/user'
        }
      ];
  }

}



