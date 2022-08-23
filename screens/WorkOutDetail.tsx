import { View, Pressable, StyleSheet, Text } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
interface Slug {
	route: {
		params: {
			slug: string;
		};
	};
}

const WorkOutDetail = ({ route }: NativeStackHeaderProps & Slug) => {
	const workouts = useWorkoutBySlug(route.params.slug);
	if (workouts === null) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Text>Work out details!</Text>
			<Text>{workouts.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		lineHeight: 20,
		flex: 1,
	},
});

export default WorkOutDetail;
