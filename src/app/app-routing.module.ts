import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChoiceComponent } from './choice/choice.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
       { path: '', redirectTo: '/settings', pathMatch: 'full' },
       { path: 'settings', component: ChoiceComponent },
       { path: 'news', component: NewsComponent },
       { path: '**', component: ChoiceComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
