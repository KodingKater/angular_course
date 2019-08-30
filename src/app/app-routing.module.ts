import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Page404Component} from './errorpages/page404/page404.component';
import {PathResolver} from 'codelyzer/angular/urlResolvers/pathResolver';
import {BookDetailComponent} from './books/book-detail/book-detail.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/books'
// },
//   {
//     path: '**',
//     resolve:{
//       path: PathResolverService
//     },
//     component: Page404Component
  },
  // {path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule)},
  { path: 'books/:isbn', component: BookDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
