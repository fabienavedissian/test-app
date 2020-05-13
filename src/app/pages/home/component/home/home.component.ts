import { Component, OnInit } from '@angular/core';
import { ListUserInterface } from './interfaces/list-users.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public myDate: Date = new Date();

  public showText: boolean = true;

  public myText: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, accusamus a quidem animi error itaque voluptas ipsam iste ut voluptate atque sapiente vel eius qui suscipit. Itaque voluptatem beatae explicabo?';

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
    console.log(this.myDate);
  }

  public eventButton(evenement: MouseEvent): void {
    console.log(evenement);
    this.showText = !this.showText;
  }

}
