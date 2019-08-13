import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './models/product.model';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db:AngularFireDatabase,
              ) { }
  


  private create(){//by this method we created a node in firebase
   return this.db.list('/shopping-carts').push({
    dateCreated: new Date().getTime()
  })
  }
 
  async getCart(){
    let cartId = await this.getorCreateCartId();
  return this.db.object('/shopping-carts/' + cartId);
  //used to read the cart from fireabase and return that 
  }

  private async getorCreateCartId():Promise<string>{
    let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId;
      let result = await this.create();
  
      localStorage.setItem('cartId',result.key);
          //add product to cart
      return result.key;
        }

  private getItem(cartId: string, key){
          return this.db.object('/shopping-carts/' + cartId + '/items/' + key);
    }

   async addTocart(product:Product){
   let cartId = await this.getorCreateCartId();
   
   let item$ = this.getItem(cartId, product.$key);

   item$.snapshotChanges().pipe(take(1)).subscribe((item:any) =>  {
    if (item.key != null) {
      item$.update( {quantity:( item.payload.val().quantity || 0) + 1}); 
    }
    else{
       item$.set( {product:product, quantity:1}); 
      }
  }); 
  }
}
