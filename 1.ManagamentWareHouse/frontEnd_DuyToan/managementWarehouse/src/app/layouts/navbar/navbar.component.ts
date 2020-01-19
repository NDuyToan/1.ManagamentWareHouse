import { Component, OnInit } from '@angular/core';

import { LoginModalService } from './../../core/login/login-modal.service';
import { AuthServerProvider } from './../../core/auth/auth-jwt.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private loginModalService: LoginModalService,
    private authServerProvider: AuthServerProvider
  ) { }

  ngOnInit() {
  }
  onLogin(): void {

    this.loginModalService.open();
  }
  onLogOut(): void {
    this.authServerProvider.logout();
  }
  isLogin() {
    return this.authServerProvider.getLocal();
  }

}
