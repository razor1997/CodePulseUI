import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPost } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) { }

  createBlogPost(data: AddBlogPost) : Observable<BlogPost>
  {
    return this.http.post<BlogPost>(environment.apiBaseUrl+'/api/blogposts', data);
  } 

  getAllBlogPosts() : Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(environment.apiBaseUrl+'/api/blogposts');
  }
}
