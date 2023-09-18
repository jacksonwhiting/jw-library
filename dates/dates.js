//Short months format
const months = {
	0: "Jan",
	1: "Feb",
	2: "Mar",
	3: "Apr",
	4: "May",
	5: "June",
	6: "July",
	7: "Aug",
	8: "Sept",
	9: "Oct",
	10: "Nov",
	11: "Dec",
}

//Takes in a date string and converts it to the following format: 15 Jan 2023
let dayMonthYearFormat = (dateString) => {
	const dateCreated = new Date(dateString)
	const createdDay = dateCreated.getDate()
	const createdMonth = months[dateCreated.getMonth()]
	const createdYear = dateCreated.getFullYear()
	return `${createdDay} ${createdMonth} ${createdYear}`
}
