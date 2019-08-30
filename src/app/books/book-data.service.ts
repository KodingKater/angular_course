import {Injectable} from '@angular/core';
import {Book} from './book';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class BookDataService {

  books: Book[];
  private baseUrl = 'http://localhost:4730';

  constructor(private http: HttpClient) {
  }


  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl + '/books');
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl + '/books', book);
  }

  updateBooks(book: Book): Observable<Book> {
    console.log(book.isbn);
    return this.http.put<Book>(this.baseUrl + `/books/${book.isbn}`, book);
  }

  getBookDetailByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(this.baseUrl + `/books/${isbn}`);
  }
}
