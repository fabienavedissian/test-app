import { Component, OnInit } from '@angular/core';
import { ListUsersModel } from '../../models/list-users.model';
import { RetourModel } from '../../models/retour.model';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public listUsers$: Observable<ListUsersModel[]>;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.listUsers$ = this.usersService.getUsers();
  }

  ohoh(data: RetourModel) {
    console.log(data);
  }

}
