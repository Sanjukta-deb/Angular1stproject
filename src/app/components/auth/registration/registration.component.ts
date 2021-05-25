import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private formbuilder : FormBuilder, private auth :AuthService) { }

  ngOnInit(): void {
    this.registerForm=this.formbuilder.group({
      firstname:[null,[Validators.required]],
      lastname:[null,[Validators.required]],
      email:[null,[Validators.required]],
      password:[null,[Validators.required]]
    })
  }

  onSubmit(){
    // console.log(this.registerForm.value);
    this.auth.RegistrationData(this.registerForm.value).subscribe(res=>{
      console.log(res);
    },
    err=>{
      console.log(err);
    }
    )
  }

}
