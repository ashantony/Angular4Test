
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {HomeComponent} from './home/home.component';
import {ServiceComponent} from './service/service.component';
import {ProductComponent} from './product/product.component';
import {AddproductComponent} from './addproduct/addproduct.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',
    component: DashboardComponent
    // pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutusComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'addproduct',
    component: AddproductComponent
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
