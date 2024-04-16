import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

import '../assets/login-animation.js';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'ng-animation-login';
  validateForm!: UntypedFormGroup;
  email: string = '';
  password: string = '';

  login() {
    console.log(`email: ${this.email} password: ${this.password}`);
    alert(`Email: ${this.email} Password: ${this.password}`);
  }

  ngAfterViewInit(): void {
    (window as any).initialize();
  }
}
