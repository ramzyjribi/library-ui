import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { UserType } from '../../../models/models';

export interface NavigationItem{
  value : string;
  link : string;
  icon : string;
}

@Component({
  selector: 'app-page-side-nav',
  templateUrl: './page-side-nav.component.html',
  styleUrl: './page-side-nav.component.scss'
})
export class PageSideNavComponent {
  panelName : string = 'Admin Panel';
  navItems : NavigationItem[]=[];

  constructor(private apiService: ApiService, private router: Router){
    apiService.userStatus.subscribe({
      next: (status) => {
        if (status == 'loggedIn') {
          router.navigateByUrl('/home');
          let user = apiService.getUserInfo();
          if (user != null) {
            console.log(user);
            if (user!.userType == 0) {
              this.panelName = 'Admin Panel';
              this.navItems = [
                { value: 'View Books', link: '/home' ,icon:''},
                { value: 'Maintenance', link: '/maintenance',icon:'' },
                { value: 'Return Book', link: '/return-book',icon:'' },
                { value: 'View Users', link: '/view-users',icon:'' },
                { value: 'Aprooval Requests', link: '/approval-requests',icon:'' },
                { value: 'All Orders', link: '/all-orders',icon:'' },
                { value: 'My Orders', link: '/my-orders',icon:'' },
              ];
            } 
            /*else if (user.userType == UserType.STUDENT) {
              this.panelName = 'Student Panel';
              this.navItems = [
                { value: 'View Books', link: '/home',icon:'' },
                { value: 'My Orders', link: '/my-orders',icon:'' },
              ];
            }*/
          }}
            else if (status == 'loggedOff') {
              this.panelName = 'Auth Panel';
              router.navigateByUrl('/login');
              this.navItems = [];
            }
          }
  
    });
  }
  }

