import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Book } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'https://library-api-t3xo.onrender.com/rest/';
  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<Book[]>(this.baseUrl + 'book/api/books');
  }

}
