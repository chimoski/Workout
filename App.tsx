import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation";
import { useCachedResources } from "./hooks/useCachedResources";
import { Text } from "react-native";
export default function App() {
	const isLoadingComplete = useCachedResources();
	if (isLoadingComplete) {
		return (
			<>
				<Navigation />
				<StatusBar style='auto' />
			</>
		);
	} else {
		return <Text>Loading......</Text>;
	}
}
