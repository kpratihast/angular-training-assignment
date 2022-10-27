import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../postmodel';
import { Globals } from '../global'
import { ManagepostsService } from '../manageposts.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminloginComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;
  loginInfo: Admin = new Admin();
  inputHash: string;
  hide = true;
  constructor(private builder: FormBuilder, private router: Router, 
    private globals: Globals, private service: ManagepostsService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.builder.group({
      username: [''],
      password: ['']
    })
  }

  get form() {
    return this.registerForm.controls;
  }

  login() {
    this.service.hashHelper(this.loginInfo.password).subscribe(hash => {
      this.service.getAdmin().subscribe( res => {
        if(res[0].password === hash.Digest && res[0].username === this.loginInfo.username) {
          this.globals.isAdminLoggedIn = true;
          localStorage.setItem('isAdmin',"true");
          this.router.navigate([""]);
          this._snackBar.open("Logged In", "Ok");
        } else {
          this._snackBar.open("Invalid Credentials", "Ok");
        }
      })
    });
    
  }

}
