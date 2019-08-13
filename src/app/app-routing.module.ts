import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AuthgaurdService } from './authgaurd.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';

const routes:Routes=[
  {path:'',component:ProductsComponent},
  {path:'products', component:ProductsComponent},
  {path:'shopping-cart', component:ShoppingCartComponent},
  {path:'login', component:LoginComponent},

  {path:'check-out', component:CheckOutComponent,canActivate:[AuthgaurdService]},
  {path:'order-success', component:OrderSuccessComponent, canActivate:[AuthgaurdService]},
  {path:'my/orders', component:MyOrderComponent,canActivate:[AuthgaurdService]},

  {path:'admin/products/new', component:ProductFormComponent,canActivate:[AuthgaurdService]},//most specific routes
  {path:'admin/products/:id', component:ProductFormComponent,canActivate:[AuthgaurdService]},
  {path:'admin/products', component:AdminProductsComponent,canActivate:[AuthgaurdService]},
  {path:'admin/orders', component:AdminOrdersComponent,canActivate:[AuthgaurdService]},
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
