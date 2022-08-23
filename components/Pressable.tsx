import { Pressable, PressableProps, Text } from "react-native";

export function PressableText(props: PressableProps & { text: string }) {
	return (
		<Pressable {...props}>
			<Text>{props.text}</Text>
		</Pressable>
	);
}
