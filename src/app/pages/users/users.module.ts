import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './component/users/users.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';


@NgModule({
  declarations: [UsersComponent, ListUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
