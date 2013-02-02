var $ = require('jquery');
var decompose = require('../public/js/listener.js');
var primeFactorsOf = require('../public/js/primeFactors.js');

describe("listener", function(){

	beforeEach(function() {
		$("<input id=number />").appendTo("body");
		$("<span id=decomposition ><span>").appendTo("body");
	});

	it("stores the result of the decomposition in the placeholder", function() {
		$("#number").val("4");
		decompose();
		
		expect($("#decomposition").text()).toEqual("4 = 2 x 2");
	});

});
