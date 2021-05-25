import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productarr=[
    {id:1, vegname:"yellowbeltpepper", quantity:2, price:8.00, image:"../assets/images/product/belt-paper.jpg"},
    {id:2, vegname:"originaltomatos", quantity:5, price:15.00,image:"../assets/images/product/tomatos.jpg"},
    {id:3, vegname:"freshEggplants", quantity:1, price:12.00,image:"../assets/images/product/eggplants.jpg"},
    {id:4, vegname:"sweetcorn", quantity:3, price:6.00,image:"../assets/images/product/sweet-corn.jpg"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
