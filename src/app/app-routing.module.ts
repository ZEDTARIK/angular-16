import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArticleComponent } from './list-article/list-article.component';
import { AboutComponent } from './about/about.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddArticleComponent } from './add-article/add-article.component';

const routes: Routes = [
  { path: '', component: ListArticleComponent},
  { path: 'list-article', redirectTo: ""},
  { path: 'about', component: AboutComponent},
  { path: 'detail/:id', component: DetailArticleComponent},
  { path: 'add-article', component: AddArticleComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
