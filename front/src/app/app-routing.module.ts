import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component'
import { AddBlogComponent } from './add-blog/add-blog.component';

const routes: Routes = [
  { path: 'list', component: BlogListComponent },
  { path: 'detail/:id', component: BlogDetailComponent },
  { path: 'add', component: AddBlogComponent },
  { path: '', redirectTo: "/list", pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
