# Cypress LINE Notify Reporter

To notify Cypress Test Results via [LINE Notify](https://notify-bot.line.me/)

![enter image description here](https://github.com/nottyo/cypress-linenotify-reporter/raw/main/images/ss.png)

## Installation

For `yarn` users

```
sh$ yarn add -D cypress-linenotify-reporter
```

For `npm` users

```
sh$ npm i -D cypress-linenotify-reporter
```

## Configuration

1. Enable this reporter via [Cypress Plugins](https://docs.cypress.io/guides/tooling/plugins-guide) `cypress/plugins/index.js`

```
const  reporter  =  require('cypress-linenotify-reporter');
module.exports  = (on, config) => {
	reporter(on, config);
};
```

2. Generate LINE Notify Token via this URL https://notify-bot.line.me/my/ (You have to do LINE Login first)
   ![Generate access token](https://github.com/nottyo/cypress-linenotify-reporter/raw/main/images/generate-token-2.png)
   ![Select Chat Room that want to send message](https://github.com/nottyo/cypress-linenotify-reporter/raw/main/images/generate-token.png)
3. Add LINE Notify token in `cypress.json`

```
{
  "env": {
    "lineNotifyToken": "<LINE Notify Token>"
  }
}
```

## MIT License

Copyright (c) 2021 Traitanit Huangsri <[traitanit.huangsri@gmail.com](mailto:traitanit.huangsri@gmail.com)>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
