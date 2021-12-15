import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieViewPage } from './movie-view.page';

const routes: Routes = [
  {
    path: '',
    component: MovieViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieViewPageRoutingModule {}
