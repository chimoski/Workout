export function slugify(text: string) {
	let arr = text.toLowerCase().split(" ");
	let resultantArr: string[] = [];
	arr.forEach((item) => {
		if (item !== arr[arr.length - 1]) {
			item += "-";
		}
		resultantArr.push(item);
	});
	return resultantArr.join("");
}
