import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApisService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import {NgForm} from '@angular/forms';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth:AuthService, private router: Router, private notify:NotifyService,private _api:ApisService) { }

  username:any;
  password:any;

  ngOnInit() {
  	/*this.databaseConnection();*/
  }
  goToDashboard(){
  	
  }
  databaseConnection(){
  	/*this._api.connectToDB().subscribe((res: any) => {
         
        if (res.code == 'Success') {
          console.log("Connection to database setup successfully!!!");
        }
        else{
          console.log("Connection to database is unsuccessful!!!")
        }
      },
          err => {
            
            if (err.status === 0 || err.status === 408) {
            }
            else{
            }

          });*/
  }

  onSubmit(form: NgForm) {
      console.log('Your form data : ', form.value);

     /* this._api.login(form.value).subscribe((res: any) => {
         
        if (res.code == 'Success') {
          this.notify.success("Success - ",res.message);
          localStorage.setItem('username',res.data[0].username);
          localStorage.setItem('token',res.data[0].token);
          this.auth.setLoggedIn();
          this.router.navigateByUrl('/dashboard');
        }
        else{
          this.notify.error("Failure - ",res.message)
        }
      },
          err => {
            
            if (err.status === 0 || err.status === 408) {
            }
            else{
            }

          });*/
  }

}
