import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjstestRoutingModule } from './rxjstest-routing.module';
import { RxjstestComponent } from './component/rxjstest/rxjstest.component';


@NgModule({
  declarations: [RxjstestComponent],
  imports: [
    CommonModule,
    RxjstestRoutingModule
  ]
})
export class RxjstestModule { }
