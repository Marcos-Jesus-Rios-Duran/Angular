import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageContainerComponent } from "./components/page-container/page-container.component";
import { LoginComponent } from './login/login.component';
import { BreadcrumbComponent } from './components/page-container/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    NavbarComponent,
    PageContainerComponent,
    LoginComponent,
    BreadcrumbComponent // Incluir BreadcrumbComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ManualEjercicios_Angular_230733';
  isLoggedIn: boolean = false;
  userName: string = '';

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
      const storedUserName = localStorage.getItem('userName');
      this.isLoggedIn = storedIsLoggedIn === 'true';
      this.userName = storedUserName || '';
    }
  }

  onLoginSuccess(name: string) {
    this.isLoggedIn = true;
    this.userName = name;
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', name);
    }
  }

  onLogout() {
    this.isLoggedIn = false;
    this.userName = '';
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userName');
    }
  }
}
