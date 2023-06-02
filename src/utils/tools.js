export const formatDate = (str) => {
	const date = new Date(str);
	let day, month, year;
	day = date.getDate();
	month = date.getMonth() + 1;
	year = date.getFullYear();
	month = month < 10 ? "0" + month : month;
	day = day < 10 ? "0" + day : day;
	let formatDate = `${year}-${month}-${day}`;
	return formatDate;
};
