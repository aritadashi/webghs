import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { RepositoryService } from 'src/app/shared/repository.service';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };

  public login() {
    if (this.loginForm.valid) {
      const usuario = this.loginForm.get('usuario')?.value;
      const senha = this.loginForm.get('senha')?.value;

      this.authService.authenticate(usuario, senha).subscribe({
        next: (res) => {
          this.router.navigate(['main']);
        },
        error: () => {
          this.router.navigate(['home']);
        },
      });
    }
  }
}
