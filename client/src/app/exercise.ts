export class ExerciseStats {
    constructor(
        public startedDate: Date = null,
        public completionDate: Date = null
    ) {
        // noop
    }
}
export class ExerciseSet {
    constructor(
        public comment: string = null,
        public seconds: number = null,
        public stats: ExerciseStats = new ExerciseStats()
    ) {
        // noop
    }

}

export class SetSetup {
    constructor(
        public comment: string = null,
        public seconds: number = null,
        public stats: ExerciseStats = new ExerciseStats()
    ) {
        // noop
    }
}

export class ExerciseRep {
    constructor(
        public count: number = null,
        public seconds: number = null
    ) {
        // noop
    }

}


export class ExerciseConfig {
    constructor(
    ) {
        // noop
    }
}

export class Exercise {

    constructor(
        public key: string,
        public name: string,
        public description: string,
        public sets: ExerciseSet[] = [],
        public reps: ExerciseRep = new ExerciseRep(),
        public schedule: string[] = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'],
        public videoUrl: string = null
    ) {
        // noop
    }
}
