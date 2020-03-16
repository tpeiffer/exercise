import { Exercise } from './exercise';

describe('Exercise', () => {

  it('should create an instance', () => {
    expect(new Exercise('key', 'name', 1, 1, 1, 'description')).toBeTruthy();
  });

  it('should have sets', () => exerciseHasSets);
  it('should have reps', () => exerciseRepHasReps);

});
