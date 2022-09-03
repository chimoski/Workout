import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { PressableText } from "./Pressable";

// export type WorkoutFormData = {
// 	name: string;
// };

// type WorkoutProps = {
// 	onSubmit: (form: WorkoutFormData) => void;

// };
export interface Form {
	name: string;
	duration: string;
	reps?: string;
	type: string;
}
interface Iprop {
	onSubmit: (form: Form) => void;
}

export default function WorkoutForm({ onSubmit }: Iprop) {
	// const [form, setForm] = useState({
	// 	name: "",
	// 	duration: "",
	// });

	// const handleChange = (name: string) => (text: string) => {
	// 	setForm({
	// 		...form,
	// 		[name]: text,
	// 	});
	// };

	const { control, handleSubmit } = useForm({});
	const [isSelected, setIsSelected] = useState(false);
	const workoutItems = ["Exercise", "Stretch", "Break"];

	return (
		<View style={styles.container}>
			<Controller
				control={control}
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (
					<TextInput
						onChangeText={onChange}
						value={value}
						style={styles.input}
						placeholderTextColor={"rgba(0,0,0,0.4)"}
						placeholder='Workout Name'
					/>
				)}
				name='name'
			/>

			<Controller
				control={control}
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (
					<TextInput
						onChangeText={onChange}
						value={value}
						style={styles.input}
						placeholderTextColor={"rgba(0,0,0,0.4)"}
						placeholder='Workout Duration'
					/>
				)}
				name='duration'
			/>
			<Controller
				control={control}
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (
					<TextInput
						onChangeText={onChange}
						value={value}
						style={styles.input}
						placeholderTextColor={"rgba(0,0,0,0.4)"}
						placeholder='Repetition'
					/>
				)}
				name='reps'
			/>

			<Controller
				control={control}
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (
					<View>
						{isSelected ? (
							workoutItems.map((item) => (
								<PressableText
									key={item}
									text={item}
									onPressIn={() => {
										setIsSelected(false);
										onChange(item);
									}}
								/>
							))
						) : (
							<TextInput
								onPressIn={() => setIsSelected(true)}
								value={value}
								style={styles.input}
								placeholderTextColor={"rgba(0,0,0,0.4)"}
								placeholder='Workout Type'
							/>
						)}
					</View>
				)}
				name='type'
			/>
			<PressableText
				style={{ marginTop: 10 }}
				text='Confirm'
				onPress={handleSubmit((data) => onSubmit(data as Form))}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 10,
	},
	input: {
		width: 200,
		margin: 2,
		marginBottom: 5,
		borderWidth: 1,
		height: 30,
		padding: 5,
		borderRadius: 5,
		borderColor: "rgba(0,0,0, 0.4)",
	},
});
