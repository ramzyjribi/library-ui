import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { ApiService } from './shared/services/api.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,SharedModule,AuthModule,UsersModule,BooksModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'libraryUI';

 

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    let status = this.apiService.isLoggedIn() ? 'loggedIn' : 'loggedOff';
    this.apiService.userStatus.next(status);
  }


}
