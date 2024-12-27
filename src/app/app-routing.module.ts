import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoanAppComponent } from './pages/loan-app/loan-app.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route redirects to Login
  { path: 'login', component: LoginComponent },        // Login page
  { path: 'loan', component: LoanAppComponent },       // Loan application page
  { path: '**', redirectTo: 'login' }                  // Wildcard route redirects to Login


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
