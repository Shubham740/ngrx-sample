import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromLoginReducer from '../store/reducer/login-reducer'
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({loginReducer:fromLoginReducer.loginReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
