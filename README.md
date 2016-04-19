# js-protractor-skeleton
A skeleton project for using protractor with Node.js

## Software needed

Node.js from http://nodejs.org/ or installed by your favourite package manager.

Protractor and webdriver-manager (the command installs both): 

```bash
npm install -g protractor
```

Use webdriver-manager to manage [Selenium](http://seleniumhq.org/) installations:

```bash
webdriver-manager update
```

Install the project dependencies from the `js-protractor-skeleton` folder:

```bash
npm install
```

## Usage

First command prompt:

```bash
node server.js
```

Second command prompt: 

```bash
protractor test/ui/conf.js
```

## Updating installations

```bash
npm install protractor@latest -g
webdriver-manager update
```