import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CoffeeMapComponent } from './pages/coffee-map/coffee-map.component';
import { CompareComponent } from './pages/compare/compare.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { FqaComponent } from './pages/fqa/fqa.component';
import { OfferComponent } from './pages/offer/offer.component';
import { PricingHelperComponent } from './pages/pricing-helper/pricing-helper.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { RoastersComponent } from './pages/roasters/roasters.component';
import { RoastersProfileComponent } from './pages/roasters-profile/roasters-profile.component';
import { UserTypeComponent } from './pages/user-type/user-type.component';
import { SharedModule } from '../shared/shared.module';
import { GenderComponent } from './pages/gender/gender.component';
import { RoasterUserComponent } from './pages/roaster-user/roaster-user.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';




@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    FavouritesComponent,
    OfferComponent,
    UserTypeComponent,
    RegisterComponent,
    CompareComponent,
    RoastersComponent,
    RoastersProfileComponent,
    PricingHelperComponent,
    AboutusComponent,
    ContactusComponent,
    CoffeeMapComponent,
    FqaComponent,
    GenderComponent,
    RoasterUserComponent,
    PrivacyPolicyComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
