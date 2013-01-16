describe("Environment", function() {

	it("is ready for tdd with vanilla javascript", function() {
		expect( 1 + 2 ).toEqual( 3 );
	});
	
	it("is ready for tdd with webdriverjs", function() {
		var client = new webdriver.http.CorsClient('http://localhost:4444/wd/hub');
		var executor = new webdriver.http.Executor(client);

		var driver = webdriver.WebDriver.createSession(executor, {
			'browserName': 'chrome',
		    'version': '',
		    'platform': 'ANY',
		    'javascriptEnabled': true
		});
		
		driver.get('http://www.google.com');
		driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
		driver.findElement(webdriver.By.name('btnG')).click();
		
		var actualTitle = undefined;
		driver.getTitle().then(function(title) {
			actualTitle = title;
		});
		
		waitsFor(function() {
	     	return actualTitle != undefined;
		}, "The title should be visible", 20000);
			
		runs(function() {
			expect(actualTitle).toEqual("Google");				
	    });

		driver.quit();
	});
});