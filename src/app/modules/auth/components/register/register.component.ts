import { Component } from '@angular/core';
import { AuthModule } from '../../auth.module';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  formRegister: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.formRegister = this.buildForm();
  }

  buildForm():FormGroup {
    return this.fb.group({
      name: ["", Validators.required],
      numberId: ["", Validators.required],
      email: ["", Validators.required]
    });
  }

  onRegister():void {
    console.log(this.formRegister.value);
  }
}
