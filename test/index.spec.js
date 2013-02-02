describe("index.html", function() {

	var Browser = require("zombie");

	var home = "http://localhost:5000/index.html";

	beforeEach(function() {	
		browser = new Browser();
	});
	
	describe("page's title", function() {
	
		it("is 'prime factors'", function(done) {
			browser.visit(home).then(function () {
				expect(browser.text("title")).toEqual("Prime factors decomposer");
				done();
			});
		});
	});
	
	describe("page's element", function() {
		
		it("decomposition's result placeholder is ready", function(done) {
			browser.visit(home).then(function () {
		      	expect(browser.query("#decomposition")).toBeDefined();
				done();
			});
		});
		
		it("placeholder shows an example of decomposition", function(done) {
			browser.visit(home).then(function () {
		      	expect(browser.text("#decomposition")).toEqual("30 = 2 x 3 x 5");
				done();
			});
		});
		
		it("input field is visible", function(done) {
			browser.visit(home).then(function () {
		      	expect(browser.query("#number")).toBeDefined();
				done();
			});
		});

		it("trigger is visible", function(done) {
			browser.visit(home).then(function () {
		      	expect(browser.text("#decompose")).toEqual("go!");
				done();
			});
		});
		
	});
		
});