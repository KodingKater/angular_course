@Component({
  // tslint:disable-next-line:component-selector
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  bookTitle: string;
  price: number
  timestamp = () => console.log(Date.now()) ;

  constructor() {
    this.bookTitle = '"Hunde für Anfänger"';
    this.price = 23;
  }

  ngOnInit() {
  }


}

import {Component, OnInit} from '@angular/core';
