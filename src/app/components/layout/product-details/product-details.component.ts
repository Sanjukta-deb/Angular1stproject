import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public singledata=[];
  public userid;
  productarr=[
    {id:1, vegname:"yellowbeltpepper", quantity:2, price:8.00, image:"../assets/images/product/belt-paper.jpg"},
    {id:2, vegname:"originaltomatos", quantity:5, price:15.00,image:"../assets/images/product/belt-paper.jpg"},
    {id:3, vegname:"freshEggplants", quantity:1, price:12.00,image:"../assets/images/product/belt-paper.jpg"},
    {id:4, vegname:"sweetcorn", quantity:3, price:6.00,image:"../assets/images/product/belt-paper.jpg"}

  ];
  constructor(private route :ActivatedRoute) { }
 
  ngOnInit(): void {
    let id:number=parseInt(this.route.snapshot.paramMap.get('id')|| '');
    this.singledata=this.productarr.filter((a)=>{
      return a.id===id;
    })
    console.log(this.singledata)
    
  }
  

}
