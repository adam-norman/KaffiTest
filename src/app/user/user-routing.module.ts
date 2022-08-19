import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CoffeeMapComponent } from './pages/coffee-map/coffee-map.component';
import { CompareComponent } from './pages/compare/compare.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { FqaComponent } from './pages/fqa/fqa.component';
import { GenderComponent } from './pages/gender/gender.component';
import { HomeComponent } from './pages/home/home.component';
import { OfferComponent } from './pages/offer/offer.component';
import { PricingHelperComponent } from './pages/pricing-helper/pricing-helper.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductComponent } from './pages/product/product.component';
import { RegisterComponent } from './pages/register/register.component';
import { RoasterUserComponent } from './pages/roaster-user/roaster-user.component';
import { RoastersProfileComponent } from './pages/roasters-profile/roasters-profile.component';
import { RoastersComponent } from './pages/roasters/roasters.component';
import { UserTypeComponent } from './pages/user-type/user-type.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'offers', component: OfferComponent },
  { path: 'user-type', component: UserTypeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'roasters', component: RoastersComponent },
  { path: 'roasters-profile', component: RoastersProfileComponent },
  { path: 'pricing-helper', component: PricingHelperComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'coffee-map', component: CoffeeMapComponent },
  { path: 'fqa', component: FqaComponent },
  { path: 'gender', component: GenderComponent },
  { path: 'roasters-user', component: RoasterUserComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
