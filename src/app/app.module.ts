import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { ListArticleComponent } from './list-article/list-article.component';
import { AboutComponent } from './about/about.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ListArticleComponent,
    AboutComponent,
    DetailArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DataService], // injection the Services
  bootstrap: [AppComponent]
})
export class AppModule { }
