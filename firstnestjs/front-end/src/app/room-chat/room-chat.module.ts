import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomChatRoutingModule } from './room-chat-routing.module';
import { RoomChatComponent } from './room-chat.component';
import { MyCommonModule } from '../my-common/my-common.module';


@NgModule({
  declarations: [
    RoomChatComponent
  ],
  imports: [
    CommonModule,
    RoomChatRoutingModule,
    MyCommonModule
  ]
})
export class RoomChatModule { }
