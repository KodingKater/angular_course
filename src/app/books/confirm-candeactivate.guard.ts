import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, Route, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {BookDetailComponent} from './book-detail/book-detail.component';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class ConfirmCandeactivateGuard implements CanDeactivate<BookDetailComponent> {
  canDeactivate(
    component: BookDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    state?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return confirm(`Du sollst kaufen JUNGE! Kauf dat Buch! ${currentRoute.url}`);
  }

}
