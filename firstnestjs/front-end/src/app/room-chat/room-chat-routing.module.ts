import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomChatComponent } from './room-chat.component';

const routes: Routes = [
  {path: "room-chat", component: RoomChatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomChatRoutingModule { }
