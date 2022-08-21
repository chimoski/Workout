export type Difficulties = "easy" | "normal" | "hard";
export type SequenceType = "exercise" | "stretch" | "break";
export interface Workout {
	slug: string;
	name: string;
	duration: number;
	sequence: WorkoutSequence[];
	difficulty: Difficulties;
}
export interface WorkoutSequence {
	slug: string;
	duration: number;
	name: string;
	type: string;
	reps?: number;
}
