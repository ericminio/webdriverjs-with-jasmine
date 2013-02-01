function open(url) {
	var client = new webdriver.http.CorsClient('http://localhost:4444/wd/hub');
	var executor = new webdriver.http.Executor(client);

	var driver = webdriver.WebDriver.createSession(executor, {
		'browserName': 'chrome',
	    'version': '',
	    'platform': 'ANY',
	    'javascriptEnabled': true
	});
	
	driver.get(url);
	
	return driver;
}