import { Component, OnInit } from '@angular/core';
import { ListUserInterface } from './interfaces/list-users.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showText: boolean = true;

  public listUsers: ListUserInterface[] = [
    {
      id: 0,
      name: 'toto',
      color: 'yellow'
    },
    {
      id: 1,
      name: 'tata',
      color: 'blue'
    },
    {
      id: 2,
      name: 'titi',
      color: 'green'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public eventButton(evenement: MouseEvent): void {
    console.log(evenement);
    this.showText = !this.showText;
  }

}
