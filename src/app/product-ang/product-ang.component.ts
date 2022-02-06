import { Component, OnInit } from '@angular/core';
import { Iproducts, DiscountOffers,ICategory } from '../shared-class&types/Iproducts';
import{ProductService} from '../services/product-service.service'

@Component({
  selector: 'app-product-ang',
  templateUrl: './product-ang.component.html',
  styleUrls: ['./product-ang.component.scss']
})
export class ProductAngComponent implements OnInit {
  //public Discount:boolean
  Discount:DiscountOffers;
  StoreName:string;
  StoreLogo:string;
  ProductList:Iproducts[];
  CategoryList:ICategory[];
  ClientName:string;
  Ipurshased:boolean;
  check :boolean;
  allprods: any;
  //ProductService: ProductService = new ProductService;

  constructor(private ProductService:ProductService) {
    //this.Discount= true;
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
  
}

