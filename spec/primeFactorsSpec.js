describe("Prime factors decomposer", function() {

	it("knows that 2 = 2", function() {
		expect(primeFactorsOf(2)).toEqual([2]);
	});

	it("knows that 3 = 3", function() {
		expect(primeFactorsOf(3)).toEqual([3]);
	});
	
	it("knows that 4 = 2 x 2", function() {
		expect(primeFactorsOf(4)).toEqual([2, 2]);
	});

});


