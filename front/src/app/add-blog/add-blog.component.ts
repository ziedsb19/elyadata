import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogServiceService } from "../blog-service.service"
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  blogForm = new FormGroup({
    author: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    content: new FormControl(null),
  });

  constructor(private blogService: BlogServiceService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.blogService.addBlog(this.blogForm.value).subscribe(data => {
      this.route.navigate(["/list"])
    })
  }

}
