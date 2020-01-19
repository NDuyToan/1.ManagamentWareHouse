import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{  Subscription } from 'rxjs';
import { NgbActiveModal, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable} from 'rxjs';

import { AuthService } from './../../service/auth.service';
import { AuthServerProvider } from './../../core/auth/auth-jwt.service';

import { LoginDto } from './../../shared/model/userLogin';
import { UserCurrentDto } from './../../shared/model/userLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLogin: boolean = false;

  
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authServerProvider: AuthServerProvider,
    public activeModal: NgbActiveModal,

    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  loginForm = this.fb.group({
    username: [''],
    password: [''],
    rememberMe: [false],
  });

  onSubmit(): void{
    this.authServerProvider.login(this.loginForm.value).subscribe(
      (res) =>{ console.log('token',res);
      this.authServerProvider.setLocal(res.id_token);
      this.isLogin = false;
      this.activeModal.close();
    },
      () =>{

        this.isLogin = true;
    }
    )
  }

  layKey(){
    console.log("Key da luu",this.authServerProvider.getLocal());
  }

  // onSubmit1():void {
  //   this.authService.login(this.loginForm.value).subscribe(
  //     () => { this.logined = false},
  //     (err) => {
  //       console.log(err);
  //       this.logined = true});
  //     console.log('logined: ', this.logined)

  // }




}
