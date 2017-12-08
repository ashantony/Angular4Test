import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'fa fa-home'},
      {label: 'About Us', icon: 'fa-book'},
      {label: 'Service', icon: 'fa-support'},
      {label: 'Add Product', icon: 'fa fa-product-hunt'}
    ];
  }

}
