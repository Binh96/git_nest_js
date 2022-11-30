import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/header.component';
import { HeadModule } from './head/head.module';
import { HeadComponent } from './head/head.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavModule } from './side-nav/side-nav.module';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
  
    ErrorComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    HeadModule,
    SideNavModule
  ],
  exports: [
    HeaderComponent,
    HeadComponent,
    SideNavComponent,
    ErrorComponent
  ]
})
export class MyCommonModule { }
