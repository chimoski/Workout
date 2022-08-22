import { containsKey, getData, removeItem, storeData } from ".";
import { Workout } from "../types";
import data from "../data.json";

export const getWorkout = async (): Promise<Workout[]> => {
	const workout = await getData("workout");
	return workout;
};

export const initWorkout = async (): Promise<boolean> => {
	const hasWorkouts = await containsKey("workout");
	if (!hasWorkouts) {
		await storeData("workout", data);
		return true;
	}
	return false;
};

export const clearWorkouts = async () => {
	await removeItem("workout");
};
