import { Component, OnInit } from '@angular/core';
import { NavModel } from './interface/nav.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public navLinks: NavModel[] = [
    {
      path: '/',
      label: 'Home'
    },
    {
      path: 'users',
      label: 'Users'
    },
    {
      path: 'graph',
      label: 'Graphiques'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
