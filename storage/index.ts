import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: any) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(key, jsonValue);
	} catch (error: any) {
		console.log(error.message);
	}
};

export const getData = async (key: string) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			const data = JSON.parse(value);
			return data;
		}
	} catch (error: any) {
		// Error retrieving data
		console.log(error.message);
	}
};

export const containsKey = async (key: string) => {
	try {
		const keys = await AsyncStorage.getAllKeys();
		return keys.includes(key);
	} catch (err: any) {
		console.warn(err.message);
	}
};

export const removeItem = async (key: string) => {
	try {
		await AsyncStorage.removeItem(key);
	} catch (err: any) {
		console.warn(err.message);
	}
};
