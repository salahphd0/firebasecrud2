import { AuthenticationService } from './../shared/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Member } from '../models.ts/Member';
import { MemberService } from '../shared/member.service';
@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
members=[]
  constructor(private memberService: MemberService,
    public authServices: AuthenticationService
    ) { }

  ngOnInit() {
    this.fetchMembers();

    let membersRes=this.memberService.getMemberList()
    membersRes.snapshotChanges().subscribe(res=>{
      this.members=[]
      res.forEach(item=>{
        let a=item.payload.toJSON()
        a['$key']=item.key
        this.members.push(a as Member)
      })
    })
  }
  fetchMembers(){
    this.memberService.getMemberList().valueChanges().subscribe(res=>{
      console.log(res)
          })
  }

  deleteMember(id){
    console.log(id)
    if(window.confirm('Are you sure?')){
      this.memberService.deleteMember(id)
    }
  }

}
