import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent implements OnInit {
  @Input('product') product:Product;
  @Input('show-actions') showActions=true;
  @Input('shopping-cart') ShoppingCart;
  constructor(private cartService:ShoppingCartService) { }

  ngOnInit() {
  }
  addtoCart(product:Product){
  this.cartService.addTocart(product);
  }
  getQuantity(){
    if(!this.ShoppingCart) return 0;
    let item = this.ShoppingCart.item[this.product.$key];
    return item ? item.quantity :0;

  }

}
