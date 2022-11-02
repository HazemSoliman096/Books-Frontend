import { Component, OnInit } from '@angular/core';
import { Books } from './mock_books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = Books;

  constructor() { }

  ngOnInit(): void {
  }

};
