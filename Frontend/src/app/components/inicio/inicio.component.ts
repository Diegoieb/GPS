import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  items: MenuItem[]=[];

  position: string = 'left';
  ngOnInit() {
    this.items = [
        {
            label: 'Finder',
            icon: '../../../assets/sinfondo.png'
        },
        {
            label: 'App Store',
            icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
        },
        {
            label: 'Photos',
            icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
        },
        {
            label: 'Trash',
            icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
        }
    ];
}
}
