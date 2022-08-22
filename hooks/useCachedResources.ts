import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { getWorkout, initWorkout } from "../storage/workout";

export function useCachedResources() {
	const [isLoadingComplete, setIsLoadingComplete] = useState(false);
	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				await initWorkout();
				await Font.loadAsync({
					montserrat: require(""),
				});
			} catch (error) {
				console.warn(error);
			} finally {
				getWorkout();
				setIsLoadingComplete(true);
			}
		}
		loadResourcesAndDataAsync();
	}, [isLoadingComplete]);
}
