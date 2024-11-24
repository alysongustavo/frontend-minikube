import {Component, OnInit} from '@angular/core';
import {Category} from './category.model';
import {CategoryService} from '../services/category.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (data) => (this.categories = data),
      error: (err) => console.error('Error fetching categories:', err),
    });
  }

}
