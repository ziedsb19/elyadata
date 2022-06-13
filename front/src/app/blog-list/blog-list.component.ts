import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from "../blog-service.service";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs = [];

  constructor(private blogService: BlogServiceService) { }

  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe((data) => {
      this.blogs = data;
    })
  }

}
