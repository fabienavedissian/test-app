import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const MODULES = [
  MatButtonModule,
  MatTabsModule,
  MatInputModule,
  MatFormFieldModule
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
export class MaterialModule { }
