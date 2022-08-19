import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

import { AccordionModule } from 'primeng/accordion';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from '../user/user-routing.module';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ChartModule } from 'primeng/chart';
import { KnobModule } from 'primeng/knob';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { TooltipModule } from 'primeng/tooltip';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTabsModule,
    CarouselModule,
    MatSlideToggleModule,
    InputSwitchModule,
    FormsModule,
    AccordionModule,
    SliderModule,
    CheckboxModule,
    RatingModule,
    DialogModule,
    MatStepperModule,
    TableModule,
    DropdownModule,
    ProgressBarModule,
    ChartModule,
    KnobModule,
    InputTextModule,
    CalendarModule,
    ChipsModule,
    TooltipModule

  ],
  exports: [
    CommonModule,
    UserRoutingModule,
    MatTabsModule,
    CarouselModule,
    MatSlideToggleModule,
    InputSwitchModule,
    FormsModule,
    AccordionModule,
    SliderModule,
    CheckboxModule,
    RatingModule,
    DialogModule,
    DropdownModule,
    MatStepperModule,
    TableModule,
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent,
    ProgressBarModule,
    ChartModule,
    KnobModule,
    InputTextModule,
    CalendarModule,
    ChipsModule,
    TooltipModule
  ]
})
export class SharedModule { }
