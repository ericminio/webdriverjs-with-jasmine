var primeFactors = require('../public/js/primeFactors.js');

describe("Prime factors decomposer", function() {

	it("knows that 2 = 2", function() {
		expect(primeFactors(2)).toEqual([2]);
	});

	it("knows that 16 = 2 x 2 x 2 x 2", function() {
		expect(primeFactors(16)).toEqual([2, 2, 2, 2]);
	});

	it("knows that 3 = 3", function() {
		expect(primeFactors(3)).toEqual([3]);
	});
	
	it("knows that 36 = 2 x 2 x 3 x 3", function() {
		expect(primeFactors(36)).toEqual([2, 2, 3, 3]);
	});


	it("knows that 300 = 2 x 2 x 3 x 5 x 5", function() {
		expect(primeFactors(300)).toEqual([2, 2, 3, 5, 5]);
	});
});



