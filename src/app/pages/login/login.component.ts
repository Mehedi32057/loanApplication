import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';

  loginEmail: string = '';
  loginPassword: string = '';

  constructor(private router: Router) {}

  onSignup(event: Event): void {
    event.preventDefault();
    
    // Store user data in localStorage
    const userData = {
      username: this.username,
      email: this.email,
      phone: this.phone,
      password: this.password,
    };
    localStorage.setItem('user', JSON.stringify(userData));

    // Show signup success
    alert('Signup successful! You can now login.');
    
    // Reset form
    this.username = '';
    this.email = '';
    this.phone = '';
    this.password = '';
  }

  onLogin(event: Event): void {
    event.preventDefault();
    
    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (storedUser.email === this.loginEmail && storedUser.password === this.loginPassword) {
      // Redirect to loan page on successful login
      this.router.navigate(['/loan']);
    } else {
      // Show error message
      alert('Invalid email or password.');
    }

    // Reset login form
    this.loginEmail = '';
    this.loginPassword = '';
  }

  

}
