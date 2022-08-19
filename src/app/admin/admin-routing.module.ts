import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../admin/pages/home/home.component';
import { AdminComponent } from './admin.component';
import { CompaignsComponent } from './pages/compaigns/compaigns.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { FavRoastersComponent } from './pages/fav-roasters/fav-roasters.component';
import { SubPlansComponent } from './pages/sub-plans/sub-plans.component';
import { TrackedPricesComponent } from './pages/tracked-prices/tracked-prices.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'edit-profile', component: EditProfileComponent },
    { path: 'plans', component: SubPlansComponent },
    { path: 'compaigns', component: CompaignsComponent },
    { path: 'trackrd-price', component: TrackedPricesComponent },
    { path: 'fav-roasters', component: FavRoastersComponent },
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
