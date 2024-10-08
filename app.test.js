const sortByAge = require('./app.js');

const testUsers = [
	{ name: 'saad', age: 34 },
	{ name: 'salim', age: 23 },
];

test('function to sort the ages', () => {
	const res = sortByAge(testUsers);

	expect(res[0].name).toBe('salim');
});

test('test to check if the sort function is returning a value', () => {
	const res = sortByAge(testUsers);
	expect(res).not.toBe(undefined);
});
