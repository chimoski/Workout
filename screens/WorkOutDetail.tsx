import { View, StyleSheet, Text } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import { PressableText } from "../components/Pressable";
import { Modal } from "../components/Modal";
import { secToMin } from "../utility/secToMin";
import { FontAwesome } from "@expo/vector-icons";
import { WorkoutItem } from "../components/WorkoutItem";
import { useEffect, useState } from "react";
import { WorkoutSequence } from "../types";
import { useCountDown } from "../hooks/useCountDown";

interface Slug {
	route: {
		params: {
			slug: string;
		};
	};
}

const WorkOutDetail = ({ route }: NativeStackHeaderProps & Slug) => {
	const starterMessage = ["GO!", "1", "2", "3"];
	const workouts = useWorkoutBySlug(route.params.slug);
	const [sequence, setSequence] = useState<WorkoutSequence[]>([]);
	const [idxTracker, setIdxTracker] = useState(-1);

	const { countDown, isCounting, stop, start } = useCountDown(idxTracker);

	useEffect(() => {
		if (!workouts) return;
		if (idxTracker === workouts!.sequence.length - 1) return;
		if (countDown === 0) {
			addToSequence(idxTracker + 1);
		}
	}, [countDown]);

	const addToSequence = (idx: number) => {
		let _sequence = [];

		if (idx > 0) {
			_sequence = [...sequence, workouts!.sequence[idx]];
		} else {
			_sequence = [workouts!.sequence[idx]];
		}

		setSequence(_sequence);
		setIdxTracker(idx);
		start(_sequence[idx].duration + starterMessage.length);
	};

	if (workouts === null) {
		return null;
	}

	const hasSequenceEnd =
		sequence.length === workouts.sequence.length && countDown === 0;

	return (
		<View style={styles.container}>
			<WorkoutItem item={workouts}>
				<Modal
					activator={({ handleOpen }) => (
						<PressableText text='check sequence' onPress={handleOpen} />
					)}>
					<View>
						<View style={styles.itemView}>
							<Text style={styles.boldText}>Name |</Text>
							<Text style={styles.boldText}>Repeat |</Text>
							<Text style={styles.boldText}>Type |</Text>
							<Text style={styles.boldText}>Time |</Text>
						</View>
						{workouts.sequence.map((item, i) => (
							<View key={item.slug} style={styles.itemText}>
								<Text style={styles.icon}>
									{item.name} | {item.reps} | {item.type} |{" "}
									{secToMin(item.duration)}
								</Text>
								{i !== workouts.sequence.length - 1 && (
									<Text style={styles.icon}>
										<FontAwesome name={"arrow-circle-down"} />
									</Text>
								)}
							</View>
						))}
					</View>
				</Modal>
			</WorkoutItem>

			<View>
				{sequence.length === 0 ? (
					<FontAwesome
						name='play-circle-o'
						size={100}
						onPress={() => addToSequence(0)}
					/>
				) : isCounting ? (
					<FontAwesome name='stop-circle-o' size={100} onPress={() => stop()} />
				) : (
					<FontAwesome
						name='play-circle-o'
						size={100}
						onPress={() => {
							if (hasSequenceEnd) {
								addToSequence(0);
							}
							if (!hasSequenceEnd) {
								start(countDown);
							}
						}}
					/>
				)}
			</View>
			{sequence.length > 0 && idxTracker >= 0 && (
				<Text>
					{countDown > sequence[idxTracker].duration
						? starterMessage[countDown - sequence[idxTracker].duration - 1]
						: countDown}
				</Text>
			)}
			<Text>
				{sequence.length === 0
					? "Prepare"
					: hasSequenceEnd
					? "Great Job !"
					: sequence[idxTracker].duration >= countDown &&
					  sequence[idxTracker].name}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		lineHeight: 20,
		flex: 1,
	},
	boldText: {
		fontWeight: "bold",
		marginLeft: 10,
	},
	itemView: {
		display: "flex",
		flexDirection: "row",
		textDecorationLine: "underline",
	},
	itemText: {
		marginTop: 20,
	},
	icon: {
		textAlign: "center",
	},
});

export default WorkOutDetail;
