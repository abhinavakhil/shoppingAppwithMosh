import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DataTableModule} from "angular-6-datatable";//datatables

import { CustomFormsModule } from 'ng2-validation'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//firebase setup
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';//used for realtime database
import { AngularFireAuthModule } from 'angularfire2/auth';//used for authentication

import { environment } from 'src/environments/environment.prod';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthgaurdService } from './authgaurd.service';
import { UserService } from './user.service';
import { AdminAuthGaurdService } from './admin-auth-gaurd.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { FilterPipe } from './filter.pipe';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductsCardComponent } from './products-card/products-card.component';
import { ShoppingCartService } from './shopping-cart.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    FilterPipe,
    ProductFilterComponent,
    ProductsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule ,
    CustomFormsModule,
    DataTableModule
  ],
  providers:[AuthService,
             AuthgaurdService,
             UserService,
             AdminAuthGaurdService,
             CategoryService,
             ProductService,
             ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
