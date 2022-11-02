import { Component, OnInit } from '@angular/core';
import { Books } from './mock_books';
import { Book } from './book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = Books;
  selectedBook? : Book;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

};
