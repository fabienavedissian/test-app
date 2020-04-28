import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './component/users/users.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { UsersService } from './services/users.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddUserComponent } from './component/add-user/add-user.component';


@NgModule({
  declarations: [UsersComponent, ListUserComponent, AddUserComponent],
  imports: [
    UsersRoutingModule,
    SharedModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
