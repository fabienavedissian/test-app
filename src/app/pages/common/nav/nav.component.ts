import { Component, OnInit } from '@angular/core';
import { NavModel } from './interface/nav.model';
import { interval, Observable, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public timeObservable: Observable<Date> = timer(0, 1000).pipe(
    map(() => new Date()),
    shareReplay(1)
  );

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
    },
    {
      path: 'rxjs',
      label: 'Test RXJS'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
