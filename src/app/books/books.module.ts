import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBooksComponent } from './view-books/view-books.component';
import { SharedModule } from '../shared/shared.module';
import { BookStoreComponent } from './book-store/book-store.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';



@NgModule({
  declarations: [
    ViewBooksComponent,
    BookStoreComponent,
    UserOrdersComponent
  ],
  imports: [
    CommonModule,SharedModule
  ]
})
export class BooksModule { }
