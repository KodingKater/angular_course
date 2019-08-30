import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookDetailComponent} from './books/book-detail/book-detail.component';
import {ConfirmCandeactivateGuard} from './books/confirm-candeactivate.guard';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/books'
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module')
      .then(m => m.BooksModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module')
      .then(m => m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
