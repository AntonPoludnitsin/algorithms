import { foo } from '../first';


test('My first test', () => {
	expect(Math.max(1, 5, 10)).toBe(10);
});

test('second test', () => {
	console.log(foo());
	expect(foo()).toBe(1);
});