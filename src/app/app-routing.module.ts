import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'members',
    loadChildren: () => import('./members/members.module').then( m => m.MembersPageModule)
  },
  {
    path: '',
    redirectTo: 'members',
    pathMatch: 'full'
  },
  {
    path: 'create-member',
    loadChildren: () => import('./create-member/create-member.module').then( m => m.CreateMemberPageModule)
  },
  {
    path: 'edit-member/:id',
    loadChildren: () => import('./edit-member/edit-member.module').then( m => m.EditMemberPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
