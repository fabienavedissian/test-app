import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjstestComponent } from './component/rxjstest/rxjstest.component';


const routes: Routes = [
  {
    path: '',
    component: RxjstestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjstestRoutingModule { }
