import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    loadChildren: ()=> import('./signin/signin.module').then(m =>m.SigninModule)
  },
  {
    path:'register',
    loadChildren: ()=> import('./signup/signup.module').then(m =>m.SignupModule)
  },
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
