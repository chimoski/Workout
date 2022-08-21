import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import WorkOutDetail from "../screens/WorkOutDetail";

const Stack = createNativeStackNavigator();
export default function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Root'
					component={BottomTabNagvigator}
					options={{ headerShown: false }} // to avoid displaying the header
				/>
				<Stack.Screen
					name='WorkOutDetail'
					component={WorkOutDetail}
					options={{ title: "" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const BottomTab = createBottomTabNavigator();
function BottomTabNagvigator() {
	return (
		<BottomTab.Navigator>
			<BottomTab.Screen
				name='Home'
				component={HomeScreen}
				//unMountOnBlur to destroy or kill the screen on toggle to another screen
				options={{
					unmountOnBlur: false,
					tabBarIcon: () => <FontAwesome name='home' size={24} color='black' />,
				}}
			/>
			<BottomTab.Screen
				name='Planner'
				component={PlannerScreen}
				options={{
					unmountOnBlur: false,
					tabBarIcon: () => (
						<Entypo name='add-to-list' size={24} color='black' />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}
