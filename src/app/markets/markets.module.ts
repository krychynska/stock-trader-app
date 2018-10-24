import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketsComponent} from './markets.component';
import {RouterModule} from '@angular/router';

const ROUTES = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MarketsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [MarketsComponent]
})
export class MarketsModule { }
