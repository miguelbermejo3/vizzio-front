import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../autenticacion-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: string|any;
  apellidos: string|any;
  email: string|any;
  password: string|any;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  onInputFocus(event: any) {
    const inputWrapper = event.target.closest('.input-wrapper');
    inputWrapper.classList.add('ion-focused');
  }

  onInputBlur(event: any) {
    const inputWrapper = event.target.closest('.input-wrapper');
    inputWrapper.classList.remove('ion-focused');

    // Si el input está vacío después de desenfocar, restaurar la posición del label
    if (!event.target.value) {
      const label = inputWrapper.querySelector('ion-label');
      label.style.transform = 'translateY(0) scale(1)';
    }
  }

  register() {
    const user = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      email: this.email,
      password: this.password
    };

    this.authService.register(user).subscribe(
      res => {
        console.log('Usuario registrado', res);
        this.router.navigate(['/login']);
      },
      err => {
        console.error('Error al registrar usuario', err);
      }
    );
  }
}
