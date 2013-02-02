var primeFactors = require('../public/js/primeFactors.js');

describe("Prime factors decomposer", function() {

	it("knows that 2 = 2", function() {
		expect(primeFactors(2)).toEqual([2]);
	});

	it("knows that 3 = 3", function() {
		expect(primeFactors(3)).toEqual([3]);
	});
	
	it("knows that 4 = 2 x 2", function() {
		expect(primeFactors(4)).toEqual([2, 2]);
	});

});


