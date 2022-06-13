import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  baseUrl = "/api";

  constructor(private httpClient: HttpClient) { }

  getAllBlogs(): Observable<[any]> {
    return this.httpClient.get<[any]>(this.baseUrl)
  }

  getBlogByID(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/" + id)
  }


  changeVote(id, increment: boolean) {
    return this.httpClient.get<[any]>(this.baseUrl + "/" + id + "/" + increment)
  }

  addBlog(blog) {
    return this.httpClient.post(this.baseUrl + '/add', blog);
  }

}
