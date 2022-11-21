import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { MyCommonModule } from './my-common/my-common.module';
import { HomePageModule } from './home-page/home-page.module';
import { RoomChatModule } from './room-chat/room-chat.module';
import { SignupModule } from './signup/signup.module';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MyCommonModule,
    HttpClientModule,
    HomePageModule,
    RoomChatModule,
    SignupModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
