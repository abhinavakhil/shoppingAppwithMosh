import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';//take operator is used to return an observable at a time (1 time 1 obesvable only if take(1))

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories:Observable<any>;
  product={};
  id:any;
  constructor(private CategoryService:CategoryService,
              private productService:ProductService,
              private router:Router,
              private route:ActivatedRoute) {   
      this.id = this.route.snapshot.paramMap.get('id'); 
      if(this.id) 
      this.productService.getAllProducts(this.id).pipe(take(1)).subscribe(p=>this.product=p);
   }

  ngOnInit() {
    this.categories=this.CategoryService.getCategories().valueChanges();
   }
  save(product:NgForm){
    if(this.id){
      this.productService.UpdateProducts(this.id,product);
    }
    else{
      this.productService.create(product);
    }
   
   //alert("products saved Successfully");
   this.router.navigate(['/admin/products']);
  }
  delete(){
    if(!confirm("Are you Sure You want to delete the product?")) return 
      this.productService.DeleteProducts(this.id);
      this.router.navigate(['/admin/products']);
  }

}
