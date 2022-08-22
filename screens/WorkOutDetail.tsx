import { View, Pressable, StyleSheet, Text } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";

interface Slug {
	route: {
		params: {
			slug: string;
		};
	};
}

const WorkOutDetail = ({ route }: NativeStackHeaderProps & Slug) => {
	return (
		<View style={styles.container}>
			<Text>Work out details!</Text>
			<Text>Slug: {route.params.slug}</Text>
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
