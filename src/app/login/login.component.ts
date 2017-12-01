import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import * as _ from 'lodash';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // public firstName: string;
  // public lastName: string;
  public userName: string;
  public password: string;
  result = [];
  constructor(private httpservice: HttpService,
  private  router: Router) {
  }

  ngOnInit() {
  }

  login() {

    this.httpservice.getLogin().subscribe(
      (response: any) => {
        this.result = response;
        // _.forEach(this.result, function (userData) {
        //     console.log(userData, "userData");
        //
        // });

        const isUserExist = _.find(this.result, (userData) => {
          if ((userData.creadentials.username === this.userName) && (userData.creadentials.password === this.password)) {
            return userData;
          }
        });
        this.router.navigate(['/dashboard']);
      });
  }
}
