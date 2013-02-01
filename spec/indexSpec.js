describe("index.html", function() {

	var browser;
	
	beforeEach(function() {
		browser = open('http://localhost:9292');
	});
	
	afterEach(function() {
		browser.quit();
	});

	("has a title inviting to prime factors decomposition", function() {

		var actualTitle = undefined;
		browser.getTitle().then(function(title) {
			actualTitle = title;
		});
		
		waitsFor(function() {
	     	return actualTitle != undefined;
		}, "The title should be visible", 2000);
			
		runs(function() {
			expect(actualTitle).toEqual("Prime factors decomposer");				
	    });
	});
	
	it("has a number input field", function() {
		
		browser.findElement(webdriver.By.name('number')).sendKeys(300);
		
	});
});