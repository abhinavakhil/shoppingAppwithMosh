import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  category$:any;
  @Input('category') category1;

  constructor(private categoryService:CategoryService) {
    this.category$=this.categoryService.getCategories().snapshotChanges();
   }

  ngOnInit() {
  }

}
