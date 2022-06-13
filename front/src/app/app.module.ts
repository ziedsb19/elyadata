import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AddBlogComponent } from './add-blog/add-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogCardComponent,
    BlogDetailComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
