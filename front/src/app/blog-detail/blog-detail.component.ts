import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from "../blog-service.service"


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  blog;

  constructor(private route: ActivatedRoute, private blogService: BlogServiceService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.blogService.getBlogByID(id).subscribe((data => {
        this.blog = data;
      }))
    });
  }

}
