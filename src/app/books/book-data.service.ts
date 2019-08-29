import {Injectable} from '@angular/core';
import {Book} from './book';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class BookDataService {

  books: Book[];
  private baseUrl = 'http://localhost:4730/books';

  getBooks(): Observable<Book[]> {
     //return of(this.books);
     return this.http.get<Book[]>(this.baseUrl);
  }

  constructor(private http: HttpClient) {
  }
}
