import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import {ReactiveFormsModule} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/modules/shared.module';
import { PrimengModule } from '../../shared/modules/primeng.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // SharedModule
  ],
  exports: [
    PrimengModule,
    SharedModule
  ]
})
export class AuthModule { }
