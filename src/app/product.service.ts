import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }
  create(product){
    return this.db.list('/products').push(product);
  }
  getAll(){
    return this.db.list('/products');//getting products from firebase
  }
  getAllProducts(productId){//gettting products with id
       return this.db.object('/products/'+ productId).valueChanges();
  }
  UpdateProducts(productId,product){
    return this.db.object('/products/' + productId).update(product);
  }
  DeleteProducts(productId:string){
    return this.db.object('/products/'+ productId).remove();
  }
}
