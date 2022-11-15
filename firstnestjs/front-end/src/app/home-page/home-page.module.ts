import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponentComponent } from './home-page-component/home-page-component.component';
import { MyCommonModule } from '../my-common/my-common.module';


@NgModule({
  declarations: [
    HomePageComponentComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MyCommonModule
  ],
  exports: [
    HomePageComponentComponent
  ]
})
export class HomePageModule { }
