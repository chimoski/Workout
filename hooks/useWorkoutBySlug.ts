import { useEffect, useState } from "react";
import { getWorkoutBySlug } from "../storage/workout";
import { Workout } from "../types";

export const useWorkoutBySlug = (slug: string) => {
	const [workout, setWorkout] = useState<Workout | null>(null);

	useEffect(() => {
		async function getSlugData() {
			const workouts = await getWorkoutBySlug(slug);
			setWorkout(workouts);
		}
		getSlugData();
	}, []);

	return workout;
};
