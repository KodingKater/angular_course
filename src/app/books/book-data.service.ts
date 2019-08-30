import {Injectable} from '@angular/core';
import {Book} from './book';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class BookDataService {

  books: Book[];
  private baseUrl = 'http://localhost:4730';

  getBooks(): Observable<Book[]> {
     return this.http.get<Book[]>(this.baseUrl + '/books');
  }

  constructor(private http: HttpClient) {
  }

  getBookDetailByIsbn(isbn: any): Observable<Book> {
    return this.http.get<Book>(this.baseUrl + `/books/${isbn}`);
  }
}
