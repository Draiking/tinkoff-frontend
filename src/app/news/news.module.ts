import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


import { NewsComponent } from './news.component';
import { NewsBarComponent } from './news-bar/news-bar.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
  {
    path: ':id',
    component: NewsComponent,
    children: [
      {
        path: '',
        component: NewsDetailComponent
      }
    ]
  },
  
]

@NgModule({
  declarations: [
    NewsComponent,
    NewsBarComponent,
    NewsDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatCardModule
  ],
  exports: [
    NewsComponent
  ]
})
export class NewsModule { }
