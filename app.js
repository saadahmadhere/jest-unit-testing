const users = [
	{ name: 'saad', age: 26 },
	{ name: 'sarah', age: 24 },
	{ name: 'sahar', age: 22 },
	{ name: 'shabina', age: 52 },
];

const sortByAge = (usersArray = []) => {
	const res = usersArray.sort((a, b) => a.age - b.age);
	return res;
};

console.log(sortByAge(users));

module.exports = sortByAge;
