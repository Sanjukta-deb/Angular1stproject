import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { AboutComponent } from './components/layout/about/about.component';
import { ContactComponent } from './components/layout/contact/contact.component';
import { GalleryComponent } from './components/layout/gallery/gallery.component';
import { HomeComponent } from './components/layout/home/home.component';
import { ProductDetailsComponent } from './components/layout/product-details/product-details.component';
import { ProductComponent } from './components/layout/product/product.component';
import { OrderpageComponent } from './orderpage/orderpage.component';

const myPath: Routes = [
  {path:'', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'product', canActivate:[AuthGuard], component:ProductComponent},
  {path:'product-details/:vegname/:id',canActivate:[AuthGuard] ,component:ProductDetailsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'contact', component:ContactComponent},
  {path:'cart', component:CartComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'orderpage', component:OrderpageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(myPath)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
