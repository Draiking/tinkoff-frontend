import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';


import { NewsComponent } from './news.component';
import { NewsBarComponent } from './news-bar/news-bar.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

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
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
    exports: [
        NewsComponent,
        NewsBarComponent,
    ],
})
export class NewsModule { }
