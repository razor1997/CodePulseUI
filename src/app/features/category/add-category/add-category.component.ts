import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {
  model: AddCategoryRequest;
  private addCategorySubscription?: Subscription;

  constructor(private categoryService: CategoryService,
    private router: Router) { 
    this.model = {
      name:'Konrad',
      urlHandle: ''
    }

  }
  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }

  ngOnInit(): void {
  }

  onFormSubmit(){
      this.addCategorySubscription = this.categoryService.addCategory(this.model)
      .subscribe({
        next: (response) =>{
          this.router.navigateByUrl('/admin/categories');
      }
    });
  }

}
