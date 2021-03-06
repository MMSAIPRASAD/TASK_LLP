import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/login',pathMatch:"full"
  },
   
  {
    path:'login',component:LoginComponent
  },
    
 {
  path:'list',component:ListsComponent
}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
