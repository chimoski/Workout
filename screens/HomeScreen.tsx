import { View, Pressable, StyleSheet, FlatList, Alert } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json";
import { Workout } from "../types";
import { WorkoutItem } from "../components/WorkoutItem";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={data as Workout[]}
				keyExtractor={(item) => item.slug}
				renderItem={({ item }) => {
					return (
						<Pressable
							onPress={() => {
								navigation.navigate("WorkOutDetail");
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
