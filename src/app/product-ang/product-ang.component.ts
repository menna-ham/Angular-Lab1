import { Component, OnInit } from '@angular/core';
import { Iproducts, DiscountOffers,ICategory } from '../shared-class&types/Iproducts';
import{ProductService} from '../services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  check :boolean;
  allprods: any;

  constructor(private ProductService:ProductService , private rout:Router,  private activatedRoute:ActivatedRoute) {
   this.Discount=DiscountOffers.gDis;
    this.StoreName ='Moana';
    this.StoreLogo ="../../assets/images/logo.jpg";
    this.ProductList=[{
      Id: 1,
      Name:'Coffee',
      Quantity :100,
      Price : 30,
      Img:'../../assets/images/coffee.jpg'
    },{
       Id:2,
      Name:'Pepsi',
      Quantity :200,
      Price : 15,
      Img:'../../assets/images/pepsi.jpg'
    },{
      Id:3,
      Name:'Tea',
      Quantity :75,
      Price : 10,
      Img:'../../assets/images/tea.jpg'
    } ];
    this.CategoryList=[{Id:1, Name : 'hot'},{Id:2 ,Name : 'cold'}];
    this.ClientName='Menna-Allah';
    this.Ipurshased=true;
    this.check = true;
   }

  ngOnInit(): void {
    this.allprods= this.ProductService.GetAllProducts()
  }

  BuyBtn()
  {
    if(this.Ipurshased){
      this.Ipurshased = false;
     }
    else 
    {
      this.Ipurshased = true;
    }
  }

  renderVals(){
   this.allprods= this.ProductService.GetAllProducts()
  }

  BtnwDis()
  {
    this.rout.navigate(["discount"],{relativeTo:this.activatedRoute});
  }
  BtnWoDis(){
    this.rout.navigate(["without-discount"] ,{relativeTo :this.activatedRoute});
  }
  
}

