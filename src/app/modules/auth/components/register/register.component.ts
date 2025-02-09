import { Component } from '@angular/core';
import { AuthModule } from '../../auth.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  
})
export class RegisterComponent {

  formRegister: FormGroup;

  constructor(private readonly fb: FormBuilder, private router: Router) {
    this.formRegister = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]], 
      numberId: ["", [
        Validators.required,
        Validators.pattern(/^\d+$/),  
        Validators.minLength(10),   
        Validators.maxLength(15)    
      ]],
      email: ["", [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]]
    });
  }

  onRegister():void {
    console.log(this.formRegister.value);
  }

  goToLogin(){
    this.router.navigate(["auth/login"]);
  }

  getErrorMessage(field: string): string {
    const control = this.formRegister.get(field);
    if (control?.hasError('required')) {
      return "Este campo es obligatorio.";
    }
    if (control?.hasError('minlength')) {
      return `Debe tener al menos ${control.errors?.['minlength'].requiredLength} caracteres.`;
    }
    if (control?.hasError('maxlength')) {
      return `No puede tener más de ${control.errors?.['maxlength'].requiredLength} caracteres.`;
    }
    if (control?.hasError('pattern')) {
      if (field === 'numberId') return "Solo se permiten números.";
      if (field === 'email') return "Debe ser un correo electrónico válido.";
    }
    return "";
  }
}
