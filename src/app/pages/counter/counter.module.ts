import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    ɵInternalFormsSharedModule,
    StoreModule
  ]
})
export class CounterModule {
  @Input() count: number = 0;
}
