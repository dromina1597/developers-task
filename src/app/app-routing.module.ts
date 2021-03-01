import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{EducationComponent} from '../app/education/education.component'

//imports routers
import{LoginComponent} from './login/login.component'
import{PostComponent} from './post/post.component'
import{RegisterComponent} from './register/register.component'



const routes: Routes = [
  {path:'login',
  component:LoginComponent},

  {path:'register',
    component:RegisterComponent},

    {path:'post',
    component:PostComponent},

    {
      path:'education',
      component:EducationComponent
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
