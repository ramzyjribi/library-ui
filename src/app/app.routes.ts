import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { BookStoreComponent } from './books/book-store/book-store.component';
import { UserOrdersComponent } from './users/user-orders/user-orders.component';

export const routes: Routes = [
    
    {path :"register",component : RegisterComponent },
    {path :"home" ,component : BookStoreComponent},
    {path :"my-order",component:UserOrdersComponent},
    {path : "**" ,component : PageNotFoundComponent }
];
