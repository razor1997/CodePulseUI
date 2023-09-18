import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent implements OnInit {
  model: AddBlogPost;

  constructor(private blogPostService: BlogPostService,
    private router: Router) { 
    this.model = {
      title: "",
      shortDescription: "",
      content: "",
      featuredImageUrl:  "",
      urlHandle:  "",
      author:  "",
      publishedDate: new Date(),
      isVisible: true,
    }

  }

  ngOnInit(): void {
  }
  onFormSubmit(): void
  {
    this.blogPostService.createBlogPost(this.model)
    .subscribe( {
      next: (response) => {
        this.router.navigateByUrl('/admin/blogposts')
      }
    }
    )
  }

}
