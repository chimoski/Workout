import { Pressable, PressableProps, Text } from "react-native";

export function PressableText(props: PressableProps & { text: string }) {
	return (
		<Pressable {...props}>
			<Text style={{ textDecorationLine: "underline", marginTop: 20 }}>
				{props.text}
			</Text>
		</Pressable>
	);
}
