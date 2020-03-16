import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ExercisesComponent } from './exercises/exercises.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TimerComponent } from './timer/timer.component';
import { MatSelectModule } from '@angular/material/select';
import { ExercisesService } from './exercises.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExercisesComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [ExercisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
