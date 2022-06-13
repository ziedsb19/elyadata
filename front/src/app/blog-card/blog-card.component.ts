import { Component, OnInit, Input } from '@angular/core';
import { BlogServiceService } from "../blog-service.service"

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

  @Input() blog;

  like = false;
  dislike = false;

  constructor(private blogService: BlogServiceService) { }

  ngOnInit(): void {
  }


  changeVote(id, increment: boolean) {
    this.blogService.changeVote(id, increment).subscribe(data => {
      if (increment) {
        this.blog.votes += 1;
      }
      else {
        this.blog.votes -= 1;
      }
    })
  }

  increment() {
    if (!this.like) {
      this.like = true;
      this.dislike = false;

      this.changeVote(this.blog._id, true)

    }

  }

  decrement() {
    if (!this.dislike) {
      this.like = false;
      this.dislike = true;

      this.changeVote(this.blog._id, false)
    }

  }

}
