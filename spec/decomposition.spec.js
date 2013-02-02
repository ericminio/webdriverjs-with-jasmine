Browser = require("zombie");

describe("decomposition", function() {

	var home = "http://localhost:5000/index.html";
	var browser = new Browser();

	it("displays the decomposition of the input number", function(done) {
		browser.visit(home).
			then(function () {
				browser.fill("#number", "30");
				return browser.clickLink("#decompose");
			}).
			then(function() {
				expect(browser.text("#decomposition")).toEqual("2 x 3 x 5");
				done();
			});
	});		
	
});
		
		
