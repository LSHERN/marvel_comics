import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    DataViewModule,
    CommonModule
  ]
})
export class ComicsModule { }
