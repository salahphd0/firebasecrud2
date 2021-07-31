import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MemberService } from '../shared/member.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.page.html',
  styleUrls: ['./edit-member.page.scss'],
})
export class EditMemberPage implements OnInit {
updateMemberForm:FormGroup;
id:any;
    constructor(
      private memberService: MemberService,
      private router: Router,
      private actRout:ActivatedRoute,
      private fb: FormBuilder,

  ) {this.id=this.actRout.snapshot.paramMap.get("id")
      this.memberService.getMember(this.id).valueChanges().subscribe(res=>{
        this.updateMemberForm.setValue(res)
      })
}

  ngOnInit() {
    this.updateMemberForm=this.fb.group({
      name:[''],
      email:[''],
      mobile:[''],
      details:[''],
    })
    console.log(this.updateMemberForm.value)

  }


  updateForm(){
        this.memberService.updateMember(this.id, this.updateMemberForm.value)
        .then(()=>{
          this.router.navigate(['/members'])
        }).catch(error=> console.log(error))
      }



}
