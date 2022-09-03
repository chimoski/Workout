import React, { useState, FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PressableText } from "./Pressable";
import { Modal as DefaultModal } from "react-native";

interface Iprops {
	activator?: FC<{ handleOpen: () => void }>;
	children?: React.ReactNode;
}
export const Modal = ({ activator: Activator, children }: Iprops) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	return (
		<View>
			<DefaultModal
				visible={isModalVisible}
				animationType='fade'
				transparent={false}>
				<View style={styles.centerView}>
					{children}
					<PressableText
						text='close'
						onPress={() => setIsModalVisible(false)}
					/>
				</View>
			</DefaultModal>
			{Activator ? (
				<Activator handleOpen={() => setIsModalVisible(true)} />
			) : (
				<PressableText text='open' onPress={() => setIsModalVisible(true)} />
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		padding: 10,
		lineHeight: 20,
		flex: 1,
	},
	centerView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
