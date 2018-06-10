import { Component } from "@angular/core";
import { ProductService } from "../product/product.service";

@Component({
  selector:'acme-app-root',
  templateUrl:'./app.component.html',
  providers:[ProductService]


})
export class AppComponent
{
  appTitle:string="Acme-Product-Management";
}