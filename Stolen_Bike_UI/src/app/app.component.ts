import { Component ,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { ApisService } from './services/api.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webApp';

  constructor(private auth:AuthService,private router: Router,private _api:ApisService) { }

  ngOnInit() {
  }


  logout(){
    this.auth.setLoggedOut();
  }

}
