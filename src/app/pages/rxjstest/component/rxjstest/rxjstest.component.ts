import { Component, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ListUserInterface } from 'src/app/pages/home/component/home/interfaces/list-users.model';
import { BehaviorSubject, fromEvent, combineLatest, from, Observable } from 'rxjs';
import { throttleTime, groupBy, mergeMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-rxjstest',
  templateUrl: './rxjstest.component.html',
  styleUrls: ['./rxjstest.component.scss']
})
export class RxjstestComponent implements AfterViewInit, OnDestroy {

  @ViewChild('myButton', {static: false}) myButton: any;

  public listUsers$: BehaviorSubject<ListUserInterface[]> = new BehaviorSubject<ListUserInterface[]>([]);

  public listHobbies$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  public totalList$: Observable<any[]> = new Observable<any[]>();

  public newListUsers$: Observable<any[]> = new Observable<any[]>();

  constructor() {
    this.listHobbies$.next([
      {
        sport: 'tennis',
        home: 'télévision'
      },
      {
        sport: 'foot',
        home: 'ordinateur'
      },
      {
        sport: 'pétanque',
        home: 'cuisine'
      }
    ]);
    this.listUsers$.next([
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
      {
        id: 3,
        name: 'tointoin',
        color: 'red'
      },
      {
        id: 4,
        name: 'toutou',
        color: 'green'
      },
      {
        id: 5,
        name: 'tyty',
        color: 'black'
      },
      {
        id: 6,
        name: 'tutu',
        color: 'white'
      },
    ]);
    this.totalList$ = combineLatest(this.listUsers$, this.listHobbies$);
    this.totalList$.subscribe(val => {
      console.log(val);
    });
    this.listUsers$.subscribe(val => {
      this.newListUsers$ = from(val).pipe(
        groupBy(p => p.color),
        mergeMap(group => group.pipe(toArray()))
      );

    });

    this.newListUsers$.subscribe(val => {
      console.log(val);
    });
  }

  ngAfterViewInit(): void {
    console.log(this.myButton);
    let buttonObservable$ = fromEvent(this.myButton.nativeElement, 'click');
    buttonObservable$
    .pipe(
      throttleTime(3000)
    )
    .subscribe(() => {
      this.clickFunction();
    });
  }

  ngOnDestroy(): void {
    this.listUsers$.unsubscribe();
    this.listHobbies$.unsubscribe();
  }

  clickFunction(): void {
    console.log(`j'ai cliqué`);
  }
}
