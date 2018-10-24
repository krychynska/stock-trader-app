import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'markets',
    loadChildren: 'src/app/markets/markets.module#MarketsModule'
  },
  {
    path: 'portfolio',
    loadChildren: 'src/app/portfolio/portfolio.module#PortfolioModule'
  },
  {
    path: '',
    redirectTo: 'markets',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

