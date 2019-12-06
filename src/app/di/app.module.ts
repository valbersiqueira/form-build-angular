import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseSharedModule } from '../base/base-shared/base-shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([], {useHash: true}),
    BaseSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
