import { View, Pressable, StyleSheet, FlatList, Alert } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { WorkoutItem } from "../components/WorkoutItem";
import { useWorkout } from "../hooks/useWorkout";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
	const workout = useWorkout();

	return (
		<View style={styles.container}>
			<FlatList
				data={workout}
				keyExtractor={(item) => item.slug}
				renderItem={({ item }) => {
					return (
						<Pressable
							onPress={() => {
								navigation.navigate("WorkOutDetail", { slug: item.slug });
							}}>
							<WorkoutItem item={item} />
						</Pressable>
					);
				}}
			/>
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

export default HomeScreen;
