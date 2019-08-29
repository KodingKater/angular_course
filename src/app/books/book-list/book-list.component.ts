import { Component, OnInit } from '@angular/core';
import {BookDataService} from '../book-data.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

   bookListe = [];

  constructor(private bookData: BookDataService) {
    this.bookListe = bookData.getBooks();

  }

  ngOnInit() {
  }

}
