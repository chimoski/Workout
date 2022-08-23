import { useEffect, useState } from "react";
import { getWorkout } from "../storage/workout";
import { Workout } from "../types";
import { useIsFocused } from "@react-navigation/native";

export function useWorkout() {
	const [workouts, setWorkouts] = useState<Workout[]>([]);
	const isFocused = useIsFocused();
	useEffect(() => {
		async function getData() {
			const _workouts = await getWorkout();
			setWorkouts(_workouts);
		}
		if (isFocused) {
			getData();
		}
	}, [isFocused]);
	return workouts;
}
