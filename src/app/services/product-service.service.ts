import { Injectable } from '@angular/core';
import {Iproducts} from '../shared-class&types/Iproducts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;
  allProds:Iproducts[];

  constructor( private http:HttpClient) { 
    this.allProds=[
      {
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
      }
    ]
  }
  _url:any='./assets/Data/products.json'

  GetAllProducts(){
    //return this.allProds;
    return this.http.get(this._url)
    
  }


  GetProductById(prdId: number)
  {
    if (isNaN(prdId))
    {
      return ' Id is not a Number '
    }
    const specificprod = this.allProds.find((product)=>product.Id = prdId)

    if(specificprod)
    {
      return specificprod;
    }
    else{
      return "the Product you want is not exist "
    }
  }
  
}
  

