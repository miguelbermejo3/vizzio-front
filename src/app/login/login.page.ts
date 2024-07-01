import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../autenticacion-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string | any;
  password: string | any;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  onInputFocus(event: any) {
    const inputWrapper = event.target.closest('.input-wrapper');
    inputWrapper.classList.add('ion-focused');
  }

  onInputBlur(event: any) {
    const inputWrapper = event.target.closest('.input-wrapper');
    inputWrapper.classList.remove('ion-focused');
  }

  login() {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/tabs/tab-home']);
      },
      err => {
        console.error('Error al iniciar sesión', err);
      }
    );
  }
}
