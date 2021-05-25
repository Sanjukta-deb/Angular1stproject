import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { StoreService } from 'src/app/service/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loginResponse;
  constructor(private formbuilder : FormBuilder, private auth : AuthService, private store :StoreService, private route :Router) { }

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      email:[null,[Validators.required]],
      password:[null,[Validators.required]]
    })
  }

  onLogin(){
    console.log(this.loginForm.value);
    this.auth.LoginData(this.loginForm.value).subscribe(response=>{
      this.loginResponse=response;
      console.log(this.loginResponse);

      console.log(this.loginResponse.token);
      this.store.setIntialToken(this.loginResponse.token);
      this.route.navigate(['/product']);
    })
    

  }

}
