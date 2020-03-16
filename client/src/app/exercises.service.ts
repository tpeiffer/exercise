import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Exercise, ExerciseSet, ExerciseRep } from './exercise';
import { Observable, of } from 'rxjs';
import * as data from './data/exercises.json';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  constructor() { }

  public getExercises(twoLetterDayCode: string): Observable<Exercise[]> {

    const exercises: Exercise[] = [];
    const tempData: Exercise[] = (data as any).default;
    const tempExercisesForDay = tempData.filter(x => x.schedule.some((s) => s === twoLetterDayCode));

    for (const t of tempExercisesForDay) {
      const sets: ExerciseSet[] = [];
      for (const s of t.sets) {
        sets.push(new ExerciseSet(s.comment, s.seconds));
      }
      const ex = new Exercise(t.key, t.name, t.description, sets, new ExerciseRep(t.reps.count, t.reps.seconds), t.schedule, t.videoUrl);
      exercises.push(ex);
    }

    return of(exercises);

    // const url = 'some/url';
    // const params = new HttpParams();
    // return this.httpClient.get<Exercise[]>(url, { responseType: 'json', params });
  }

}
