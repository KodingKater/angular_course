import { Component, OnInit } from '@angular/core';
import {BookDataService} from '../book-data.service';
import {Book} from '../book';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

   bookListe: Book[];

  constructor(private bookData: BookDataService) {
    this.bookListe = bookData.getBooks();
  }

  ngOnInit() {
  }

}
