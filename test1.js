var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://www.gymwolf.com/staging');

driver.findElement(By.className('show-signup-form')).click();

driver.findElement(By.name('signup_email')).sendKeys('sandra@test.com');

driver.findElement(By.xpath("//button[contains(.,'Registreeru')]")).click();