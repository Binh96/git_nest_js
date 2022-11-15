import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/header.component';
import { HeadModule } from './head/head.module';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    HeadModule
  ],
  exports: [
    HeaderComponent,
    HeadComponent
  ]
})
export class MyCommonModule { }
