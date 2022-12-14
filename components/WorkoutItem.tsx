import { View, Text, StyleSheet, StyleProp, ViewProps } from "react-native";
import { Workout } from "../types";
import { secToMin } from "../utility/secToMin";

interface Iprops {
	item: Workout;
	children?: React.ReactNode;
	childStyle?: StyleProp<ViewProps>;
}
export const WorkoutItem = ({ item, children, childStyle = {} }: Iprops) => {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{item.name}</Text>
			<Text style={styles.text}>
				<Text style={styles.span}>Duration:</Text> {secToMin(30)}
			</Text>
			<Text style={styles.text}>
				<Text style={styles.span}>Difficulty:</Text> {item.difficulty}s
			</Text>
			{children && <View style={childStyle}>{children}</View>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		margin: 10,
		border: "1px solid #ccc",
		borderRadius: 10,
		backgroundColor: "#fff",
		boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
	},
	text: {
		padding: 10,
	},
	name: {
		padding: 10,
		fontSize: 20,
		fontWeight: "bold",
	},
	span: {
		fontWeight: "bold",
	},
});
