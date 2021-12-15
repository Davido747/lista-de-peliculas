import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieViewPageRoutingModule } from './movie-view-routing.module';

import { MovieViewPage } from './movie-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieViewPageRoutingModule
  ],
  declarations: [MovieViewPage]
})
export class MovieViewPageModule {}
