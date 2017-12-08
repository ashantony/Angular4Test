import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TabMenuModule,MenuItem} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from './http.service';
import { AppRoutingModule } from './route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenubarComponent } from './menubar/menubar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenubarComponent,
    AboutusComponent,
    HomeComponent,
    ServiceComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    PasswordModule,
    AppRoutingModule,
    TabMenuModule,
    DialogModule,
    BrowserAnimationsModule
    // AlertModule.forRoot()
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
