import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ExercisesComponent } from './exercises/exercises.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'exercises/:id', component: ExercisesComponent },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
