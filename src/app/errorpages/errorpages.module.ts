import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorpagesRoutingModule } from './errorpages-routing.module';
import { Page404Component } from './page404/page404.component';


@NgModule({
  declarations: [Page404Component],
  imports: [
    CommonModule,
    ErrorpagesRoutingModule
  ],
  exports: [Page404Component]
})
export class ErrorpagesModule { }
