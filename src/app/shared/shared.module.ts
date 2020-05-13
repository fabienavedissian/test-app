import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyslicePipe } from './pipes/myslice.pipe';

const MODULES = [
  CommonModule,
  HttpClientModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [MyslicePipe],
  imports: [
    MODULES
  ],
  exports: [
    MODULES,
    MyslicePipe
  ]
})
export class SharedModule { }
