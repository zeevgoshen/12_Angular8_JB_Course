import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { footer } from 'src/footer/footer.component';
import { header } from 'src/header/header.component';
import { login } from 'src/login/login.component';
import { AuthModule } from './app.AuthModule';



@NgModule({
  declarations: [
    AppComponent, footer, header
  ],
  imports: [
    BrowserModule, AuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
