const { sendAllQuestions, oddEvenEmpty } = require('./functions');

describe('findLargest', () => {
	it('exists', () => {
		expect(findLargestIndex).toBeDefined();
	});

	it('is a function', () => {
		expect(findLargestIndex instanceof Function).toEqual(true);
	});

	it('returns a number', () => {
		expect(typeof findLargestIndex() == 'number').toEqual(true);
	});

	it('should return index of largest number', () => {
		expect(findLargestIndex([1, 1, 4, 1])).toEqual(2);
	});

	it('returns -1 if no values are passed in', () => {
		expect(findLargestIndex([])).toEqual(-1);
	});
});

describe('oddEvenEmpty', () => {
	it('exists', () => {
		expect(oddEvenEmpty).toBeDefined();
	});

	it('is a function', () => {
		expect(oddEvenEmpty instanceof Function).toEqual(true);
	});

	it('should return odd for a single number array', () => {
		expect(oddEvenEmpty([1])).toBe('odd');
	});

	it('should return null if no array is given', () => {
		expect(oddEvenEmpty([])).toBe(null);
	});

	it('should return odd if odd length is provided', () => {
		expect(oddEvenEmpty([0, 2, 3])).toBe('odd');
	});

	it('should return even if even length array is provided', () => {
		expect(oddEvenEmpty([0, 2, 4, 6])).toBe('even');
	});
});
