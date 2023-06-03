import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArticleComponent } from './list-article/list-article.component';
import { AboutComponent } from './about/about.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';

const routes: Routes = [
  { path: '', component: ListArticleComponent},
  { path: 'list-article', redirectTo: ""},
  { path: 'about', component: AboutComponent},
  { path: 'detail/:id', component: DetailArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
