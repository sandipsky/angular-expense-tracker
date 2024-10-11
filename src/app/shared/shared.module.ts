import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NepaliDatepickerModule } from 'np-datepicker-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgSelectModule,
    NepaliDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgSelectModule,
    NepaliDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
