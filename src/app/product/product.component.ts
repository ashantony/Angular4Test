import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: number = 20;
  productStatus: string = 'Active';
  result = [];

  constructor(private httpservice: HttpService) { }

  ngOnInit() {
    // this.getImageData();
   this.httpservice.getImageData().subscribe(
      (data: any) => {
        this.result = data.image;
        console.log(this.result);
      });
  }

      display: boolean = false;

      showDialog() {
          this.display = true;
      }
      getProductStatus(){
        return this.productStatus;
      }

 }
