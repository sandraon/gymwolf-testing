var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://www.gymwolf.com/staging');

driver.findElement(By.className('search-dropdown-link')).click();
