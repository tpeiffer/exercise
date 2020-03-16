import { Component, OnInit } from '@angular/core';
import { Exercise, ExerciseSet, SetSetup, ExerciseRep } from '../exercise';
import * as data from '../data/exercises.json';
import { NoiseService } from '../noise.service';
import { ExercisesService } from '../exercises.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  private today: string = this.getToday();
  public selectedDay: string = this.today;

  exercises: Exercise[];
  dayList: { key: string; display: string }[] = [
    { key: '', display: 'Current Day' },
    { key: 'su', display: 'Sunday' },
    { key: 'mo', display: 'Monday' },
    { key: 'tu', display: 'Tuesday' },
    { key: 'we', display: 'Wednesday' },
    { key: 'th', display: 'Thursday' },
    { key: 'fr', display: 'Friday' },
    { key: 'sa', display: 'Saturday' }
  ];

  constructor(
    private noiseService: NoiseService,
    private exercisesService: ExercisesService
  ) {
    // noop
  }

  ngOnInit(): void {
    const storedDay = sessionStorage.getItem('selected-day');
    if (storedDay) {
      this.selectedDay = storedDay;
    }
    this.getExercises(this.selectedDay);
  }

  private getToday(): string {
    return (new Date()).toDateString().substr(0, 2).toLowerCase();
  }

  public setCompleted = (checked: boolean, set: ExerciseSet, applaud: boolean = false) => {
    if (checked && applaud && !set.stats.completionDate) {
      this.noiseService.play('yay');
    }
    set.stats.completionDate = checked ? new Date() : null;
  }

  public getExercises(day: string): void {
    if (day === '') {
      day = this.getToday();
    }
    sessionStorage.setItem('selected-day', day);
    this.exercisesService.getExercises(day).subscribe((dailyExercises) => { this.exercises = dailyExercises; });
  }
}
