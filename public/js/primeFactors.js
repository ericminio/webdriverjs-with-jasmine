primeFactorsOf = function(input) {
	factors = [];
	divisor = 2;

	while (divisor <= input) {
		while (input % divisor == 0) {
			factors.push(divisor);
			input /= divisor;
		}
		divisor++;
	}

	return factors;
}

var module = module || {};
module.exports = primeFactorsOf;
