import { MemberService } from './../shared/member.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.page.html',
  styleUrls: ['./create-member.page.scss'],
})
export class CreateMemberPage implements OnInit {
memberForm: FormGroup;
  constructor(
     private memberService: MemberService,
     private router: Router,
     private fb:FormBuilder,
     ) { }
  ngOnInit() {
    this.memberForm=this.fb.group({
      name:[''],
      email:[''],
      mobile:[''],
      details:[''],
    })
  }
  formSubmit(){
    if (!this.memberForm.valid){
      return false;
      }else{
        this.memberService.createMember(this.memberForm.value)
        .then(res=>{
          console.log(res)
          this.memberForm.reset();
          this.router.navigate(['/members'])
        }).catch(error=> console.log(error))
      }
  }

}
