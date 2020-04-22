import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ListUsersModel } from '../../models/list-users.model';
import { RetourModel } from '../../models/retour.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  @Input() listUsers: Observable<ListUsersModel[]>;

  @Output() btnClick: EventEmitter<RetourModel> = new EventEmitter<RetourModel>();

  @ViewChild('maDiv') maDiv: ElementRef;

  constructor() {}

  ngOnInit(): void {
  }

  maFunctionClick(event: MouseEvent, user: ListUsersModel) {
    const monRetour = {
      evenement: event,
      userSelect: user
    };
    console.log(this.maDiv);
    this.btnClick.emit(monRetour);
  }

}
