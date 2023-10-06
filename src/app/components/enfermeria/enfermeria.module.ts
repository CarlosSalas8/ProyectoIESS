import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EnfermeriaRoutingModule } from './enfermeria-routing.module';
import { EnfermeriaComponent } from './enfermeria.component';


@NgModule({
  declarations: [
    EnfermeriaComponent
  ],
  imports: [
    CommonModule,
    EnfermeriaRoutingModule,
    SharedModule
   
  ]
})
export class EnfermeriaModule { }
