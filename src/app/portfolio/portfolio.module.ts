import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioComponent} from './portfolio.component';
import {RouterModule} from '@angular/router';

const ROUTES = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PortfolioComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [PortfolioComponent]
})
export class PortfolioModule { }
