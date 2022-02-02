import { Component, OnInit } from '@angular/core';
import { Iproducts, DiscountOffers,ICategory } from '../shared-class&types/Iproducts';

@Component({
  selector: 'app-product-ang',
  templateUrl: './product-ang.component.html',
  styleUrls: ['./product-ang.component.scss']
})
export class ProductAngComponent implements OnInit {
  
  Discount:DiscountOffers;
  StoreName:string;
  StoreLogo:string;
 
  ProductList:Iproducts[];
  CategoryList:ICategory[];
  ClientName:string;
  Ipurshased:boolean;
  constructor() {
    this.Discount=DiscountOffers.gDis;
    this.StoreName ='Moana';
    this.StoreLogo ="../../assets/images/logo.jpg";
    this.ProductList=[{
      Id: 1,
      Name:'Coffee',
      Quantity :100,
      Price : 30,
      Img:'coffee.'
    },{
       Id:2,
      Name:'Pepsi',
      Quantity :200,
      Price : 15,
      Img:'pepsi.'
    },{
      Id:3,
      Name:'Tea',
      Quantity :75,
      Price : 10,
      Img:'tea.'
    } ];
    this.CategoryList=[{Id:1, Name : 'hot'},{Id:2 ,Name : 'cold'}];
    this.ClientName='Menna-Allah';
    this.Ipurshased=true
   }

  ngOnInit(): void {
  }

}
