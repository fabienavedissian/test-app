import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MODULES = [
  CommonModule,
  HttpClientModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [],
  imports: [
    MODULES
  ],
  exports: [
    MODULES
  ]
})
export class SharedModule { }
