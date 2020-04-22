import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListUsersModel } from '../models/list-users.model';

@Injectable()
export class UsersService {

  private urlApi: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(): Observable<ListUsersModel[]> {
    return this.http.get<ListUsersModel[]>(this.urlApi);
  }
}
