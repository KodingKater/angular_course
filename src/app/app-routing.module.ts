import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookDetailComponent} from './books/book-detail/book-detail.component';
import {ConfirmCandeactivateGuard} from './books/confirm-candeactivate.guard';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/books'
},
  // {
  //   path: '**',
  //   redirectTo: '/404'
  // },
  {path: 'books/:isbn',
    component: BookDetailComponent,
    canDeactivate: [ConfirmCandeactivateGuard]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
