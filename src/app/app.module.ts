import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TabMenuModule,MenuItem} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from './http.service';
import { AppRoutingModule } from './route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenubarComponent } from './menubar/menubar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    PasswordModule,
    AppRoutingModule,
    TabMenuModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
