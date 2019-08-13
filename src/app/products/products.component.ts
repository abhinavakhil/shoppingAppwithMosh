import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[];//this is an observable thats why we use async pipe or we can subscribe it here
  filteredProducts:Product[]=[];
  cart:any;
  category:string;
  constructor(private route :ActivatedRoute,private productService:ProductService,
              private shoppingcart:ShoppingCartService) {
        
      this.productService.getAll().valueChanges().pipe(switchMap(prodData=>{
        this.products = prodData;//this will get all products first then code below will run
      
      return this.route.queryParamMap})).subscribe(params =>{
        this.category = params.get('category');
        this.filteredProducts =(this.category) ?
        this.products.filter(p =>p.category.toLowerCase() === this.category.toLowerCase()):
        this.products;//if we dont have category then show all products
        console.log(this.filteredProducts);
  
    });
    

     
  }

  // async ngOnInit() {
  //   (await this.shoppingcart.getCart()).subscribe(
  //     cart =>this.cart =cart);
  // }

}
