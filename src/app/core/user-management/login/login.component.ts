import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // styles: ["body { background: rgb(2, 2, 46); }"],
  // encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  submitted = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    this.router.navigate(['/home']);
  }
}
