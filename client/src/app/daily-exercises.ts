import { Exercise, ExerciseConfig, ExerciseSet, ExerciseRep, SetSetup } from './exercise';

export class DailyExercises {

    private marchingUrl: string = null;
    private everyDay = [
        'mo',
        'tu',
        'ww',
        'th',
        'fr',
        'sa',
        'su'
    ];

    private marching = new Exercise('mar', 'Marching', 'March in place',
        [
            new ExerciseSet(null, 60)
        ],
        new ExerciseRep(),
        this.everyDay, this.marchingUrl);

    private grapevine = new Exercise('gra', 'Grapevine', 'Perform a criss-cross with your legs by stepping side-to-side.',
        [
            new ExerciseSet(null, 60)
        ],
        new ExerciseRep(),
        this.everyDay, this.marchingUrl);

    private hipFlexorStretch = new Exercise('hfl', 'Hip flexor stretch', '2X - Hold for 30 seconds',
        [
            new ExerciseSet(null, 30),
            new ExerciseSet(null, 30)
        ],
        new ExerciseRep(),
        this.everyDay, this.marchingUrl);

    private butterflyStretch = new Exercise('but', 'Butterfly stretch', '2X - Press down on knees for 30 seconds',
        [
            new ExerciseSet(null, 30),
            new ExerciseSet(null, 30)
        ],
        new ExerciseRep(),
        this.everyDay, this.marchingUrl);

    private hipRotationStretch = new Exercise('hro', 'Hip rotation stretch', '2X - Hold for 30 seconds',
        [
            new ExerciseSet(null, 30),
            new ExerciseSet(null, 30)
        ],
        new ExerciseRep(),
        this.everyDay, this.marchingUrl);

    private hipInternalRotationStretch = new Exercise('hir', 'Hip internal rotation stretch', '2X - Hold for 30 seconds',
        [
            new ExerciseSet(null, 30),
            new ExerciseSet(null, 30)
        ],
        new ExerciseRep(),
        this.everyDay, this.marchingUrl);

    private progressPlank = new Exercise('pro', 'Progress plank', '3X - Hold for 20 seconds',
        [
            new ExerciseSet(null, 20),
            new ExerciseSet(null, 20),
            new ExerciseSet(null, 20)
        ],
        new ExerciseRep(),
        this.everyDay, this.marchingUrl);

    private oneLegPlank = new Exercise('one', 'One legged plank', '2X - Hold for 20 seconds (once per side)',
        [
            new ExerciseSet('Left leg', 20),
            new ExerciseSet('Right leg', 20)
        ],
        new ExerciseRep(),
        this.everyDay, this.marchingUrl);

    private squat = new Exercise('squ', 'Squats!', '3X - 20 nice slow squats',
        [
            new ExerciseSet(),
            new ExerciseSet(),
            new ExerciseSet()
        ],
        new ExerciseRep(20),
        this.everyDay, this.marchingUrl);

    private staticLunge = new Exercise('slu', 'Static lunges', '2X - 10 per side',
        [
            new ExerciseSet(),
            new ExerciseSet()
        ],
        new ExerciseRep(10),
        this.everyDay, this.marchingUrl);

    private walkingLunge = new Exercise('wlu', 'Walking lunges', '2X - 10 per side',
        [
            new ExerciseSet(),
            new ExerciseSet()
        ],
        new ExerciseRep(10),
        this.everyDay, this.marchingUrl);

    private bandedHipAbduction = new Exercise('bha', 'Banded hip abductions', '2X - 10 per side. Hold for 3 seconds.',
        [
            new ExerciseSet(),
            new ExerciseSet()
        ],
        new ExerciseRep(10, 3),
        this.everyDay, this.marchingUrl);

    private bandedHipExtension = new Exercise('bhe', 'Banded hip extensions', '2X - 10 per side. Hold for 3 seconds.',
        [
            new ExerciseSet(),
            new ExerciseSet()
        ],
        new ExerciseRep(10, 3),
        this.everyDay, this.marchingUrl);

    private bridge = new Exercise('bri', 'Bridges', '5X - With both legs; 5X - Left leg only.',
        [
            new ExerciseSet('Left leg only'),
            new ExerciseSet('Right leg only')
        ],
        new ExerciseRep(5, 3),
        this.everyDay, this.marchingUrl);

    constructor(private day: string) {
    }

    public get exercises() {
        const exercises: Exercise[] = [];

        exercises.push(this.marching);
        exercises.push(this.grapevine);

        switch (this.day) {
            case 'sun':
                break;
            case 'mon':
            case 'wed':
            case 'fri':
                exercises.push(this.oneLegPlank);
                exercises.push(this.staticLunge);
                break;
            case 'tue':
            case 'thu':
            case 'sat':
                exercises.push(this.progressPlank);
                exercises.push(this.squat);
                exercises.push(this.walkingLunge);
                exercises.push(this.bandedHipAbduction);
                exercises.push(this.bandedHipExtension);
                exercises.push(this.bridge);
                break;
        }

        exercises.push(this.hipFlexorStretch);
        exercises.push(this.butterflyStretch);
        exercises.push(this.hipRotationStretch);
        exercises.push(this.hipInternalRotationStretch);

        return exercises;
    }
}
