import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthModule } from '../../auth.module';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [TranslateService]
})
export class LoginComponent {

  formLogin: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.formLogin = this.fb.group({
      email: ["", [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]],
      password: ["", Validators.required]
    });
    
  }

  onLogin():void {
    console.log(this.formLogin.value)
  }

  getErrorMessage(field: string): string {
    const control = this.formLogin.get(field);
    if (control?.hasError('required')) {
      return "Este campo es obligatorio.";
    }
    if (control?.hasError('pattern')) {
      if (field === 'email') return "Debe ser un correo electrónico válido.";
    }
    return "";
  }
}
