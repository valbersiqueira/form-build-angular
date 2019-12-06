import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './persentation/home/home.component';
import { HomeRoutingModuleModule } from './home-routing-module.module';
import { BaseSharedModule } from '../base/base-shared/base-shared.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    BaseSharedModule,
    CommonModule,
    HomeRoutingModuleModule
  ]
})
export class HomeModule { }
