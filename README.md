# Protractor

## Install Protractor
- After cloning this project, open your terminal and run `npm install` to install protractor locally in the project folder

## Download Selenium Grid and browser drivers then start using them
- On your terminal, run script `scripts\webdriver-manager-update.bat`


## Run test locally
1. Install dependencies  
    * __npm install__
2. Start webdriver-manager  
    * Open a cmd window  
    * Run script __start-webdriver-manager.bat__
3. Start Protractor test execution  
    * Open another cmd window  
    * __npm run e2e__  

## Run test with Selenium Docker
1. Make sure __*webdriver-manager*__ is stopped (to release port 4444)
2. Start Protractor test execution
    * Open a cmd window
    * Run script __run-test-in-selenium.bat__

## Run test with Zalenium Docker
1. Make sure webdriver-manager is stopped (to release port 4444)
2. Start Protractor test execution
    * Open a cmd window
    * Run script __run-test-in-zalenium.bat__    


