import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
const routes: Routes = [

{ path: '', pathMatch: 'full', redirectTo: 'dashboard' },
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent },
/*{ path: 'dashboard', component: DashboardComponent },*/
{ path: '**',  redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
