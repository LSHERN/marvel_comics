import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, PanelModule, FloatLabelModule, InputTextModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [TranslateService]
})
export class LoginComponent {

  formLogin: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.formLogin = this.fb.group({
      email: [""],
      password: [""]
    });
  }

  onLogin():void {
    console.log(this.formLogin.value)
  }
}
