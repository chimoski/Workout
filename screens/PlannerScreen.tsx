import { View, Text, Button } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const PlannerScreen = ({ navigation }: NativeStackHeaderProps) => {
	return (
		<View>
			<Text>planner Screen</Text>
			<Button
				onPress={() => navigation.navigate("Home")}
				title='Go to Home screen'
			/>
		</View>
	);
};

export default PlannerScreen;
