import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, throwError } from 'rxjs';
import { Book, User, UserType } from '../../models/models';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  userStatus: Subject<string> = new Subject();
  userIdentity!: User | null;
  baseUrl: string = 'http://localhost:8080/';
 
  constructor(private http: HttpClient , private jwt: JwtHelperService ) { }

  getBooks() {
    return this.http.get<Book[]>(this.baseUrl + 'rest/book/api/books');
  }

  register(user: any) {
    return this.http.post(this.baseUrl + 'register', user, {
      responseType: 'text',
    });
  }

  login(info: any) : Observable<any> {

    return this.http.post(this.baseUrl + 'authenticate',info);

  }

  isLoggedIn(): boolean {
    if (

      this.userIdentity != null
      //localStorage.getItem('access_token') != null &&
      //!this.jwt.isTokenExpired()
    )
      return true;
    return false;
  }

  getUserInfo(): User | null {
    var user1 : User;
    //if (!this.isLoggedIn()) return null;
   
    //var decodedToken = this.jwt.decodeToken(<string>localStorage.getItem('access_token'));
    //console.log(decodedToken);
    //console.log(decodedToken.firstName);
    //console.log(localStorage.getItem('access_token'));
    console.log("passer");
    console.log(this.userIdentity);
    return this.userIdentity;
    
   
  }

  logOut() {
    //localStorage.removeItem('access_token');
    this.userStatus.next('loggedOff');
    this.userIdentity = null;
  }




}
