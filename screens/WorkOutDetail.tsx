import { View, Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const WorkOutDetail = () => {
	return (
		<View style={styles.container}>
			<Text>Work out details!</Text>
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
