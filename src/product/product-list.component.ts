import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";


@Component({
    selector:'acme-product-list',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{
    pageTitle:string="Product List";
    imagwWidth:number=50;
    imageMargin:number=50;
    showImage:boolean=false;
    errorMessage:string;
    _listFilter:string;
    filterproducts:IProduct[];
     get listFilter():string
      {
        return this._listFilter;
      }
      set listFilter(value:string){
          this._listFilter=value;
          this.filterproducts =this.filterproducts ? this.performFilter(this.listFilter):this.prodcuts;
      }
      constructor(private _productService:ProductService)
      {
      }
    prodcuts:IProduct[]=[];
    ngOnInit()
    {
      this._productService.getProducts()
      .subscribe(product=> {
                 this.prodcuts =product;
                 console.log(product);
                 this.filterproducts=product;
                },error=>this.errorMessage=<any>error)

      
    }
    toogleImage():void{
        this.showImage= !this.showImage;
    }
    performFilter(filterBy:string):IProduct[]
    {
        filterBy = filterBy.toLocaleLowerCase();
        return this.prodcuts.filter((product:IProduct)=>
               product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1);
    }
    onRatingCLicked(message:string):void{
        this.pageTitle='Product List: '+message;
    }
 
}