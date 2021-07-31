import { Member } from './../models.ts/Member';
import { Injectable } from '@angular/core';
import {AngularFireList, AngularFireObject, AngularFireDatabase} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  memberListRef: AngularFireList <any>;
  memberRef: AngularFireObject <any>;


  constructor(private db:AngularFireDatabase) {
    this.memberListRef=db.list('/member')
   }
   createMember(mem:Member){
     return this.memberListRef.push({
      name:mem.name,
      email:mem.email,
      mobile:mem.mobile,
      details:mem.details,
     })
   }
   getMember(id:string){
     return this.memberRef=this.db.object('/member/'+id)
   }
   getMemberList(){
     return this.memberListRef=this.db.list('/member')
   }
   updateMember(id, mem:Member){
     return this.memberRef.update({
      name:mem.name,
      email:mem.email,
      mobile:mem.mobile,
      details:mem.details,
     })
   }
   deleteMember(id:string){
     this.memberRef=this.db.object('/member/'+id)
     this.memberRef.remove()
   }
  }
