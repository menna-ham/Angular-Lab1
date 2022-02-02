export interface Iproducts {
    Id:number,
    Name:string,
    Quantity:number,
    Price:number,
    Img:string
  }
  
  export interface ICategory {
    Id:number,
    Name:string
  }
  
  export enum DiscountOffers {noDis = "No Discount" , sDis =  "10%" , gDis =  "15%"};