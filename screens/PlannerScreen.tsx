import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import WorkoutForm, { Form } from "../components/WorkoutFom";
import { SequenceType, WorkoutSequence } from "../types";
import { slugify } from "../utility/slugify";
import ExerciseItem from "../components/ExerciseItems";
import { PressableText } from "../components/Pressable";

const PlannerScreen = ({ navigation }: NativeStackHeaderProps) => {
	const [seqItems, setSeqItems] = useState<WorkoutSequence[]>([]);
	const handleSubmit = (form: Form) => {
		const sequenceItem: WorkoutSequence = {
			slug: slugify(form.name + Date.now()),
			name: form.name,
			type: form.type as SequenceType,
			duration: parseFloat(form.duration),
		};

		if (form.reps) {
			sequenceItem.reps = parseFloat(form.reps);
		}

		setSeqItems([...seqItems, sequenceItem]);
		// const { slug, name, type, duration, reps } = sequenceItem;
	};
	return (
		<View>
			<WorkoutForm onSubmit={handleSubmit} />
			<View style={styles.list}>
				<FlatList
					data={seqItems}
					renderItem={({ item, index }) => (
						<ExerciseItem item={item}>
							<PressableText
								text='delete'
								onPress={() => {
									const items = [...seqItems];
									items.splice(index, 1);
									setSeqItems(items);
								}}
							/>
						</ExerciseItem>
					)}
					keyExtractor={(item) => item.slug}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		marginTop: 20,
		padding: 10,
	},
	text: {
		marginBottom: 5,
	},
});

export default PlannerScreen;
