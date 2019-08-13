import { Component,ViewChild, OnInit, ElementRef } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
   products$;
   
 
  constructor(private productService:ProductService) { 
    this.products$=this.productService.getAll().snapshotChanges();  
  }

  ngOnInit(){
   
  }

}
