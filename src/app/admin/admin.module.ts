import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { AdminComponent } from './admin.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { SubPlansComponent } from './pages/sub-plans/sub-plans.component';
import { CompaignsComponent } from './pages/compaigns/compaigns.component';
import { TrackedPricesComponent } from './pages/tracked-prices/tracked-prices.component';
import { FavRoastersComponent } from './pages/fav-roasters/fav-roasters.component';



@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    AdminComponent,
    EditProfileComponent,
    SubPlansComponent,
    CompaignsComponent,
    TrackedPricesComponent,
    FavRoastersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
