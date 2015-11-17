# smartdebug
debug your JavaScript the smart way

### Buildstatus/Dependencies
[![Build Status](https://travis-ci.org/pushrocks/smartdebug.svg?branch=master)](https://travis-ci.org/pushrocks/smartdebug)
[![Dependency Status](https://david-dm.org/pushrocks/smartdebug.svg)](https://david-dm.org/pushrocks/smartdebug)
[![devDependency Status](https://david-dm.org/pushrocks/smartdebug/dev-status.svg)](https://david-dm.org/pushrocks/smartdebug#info=devDependencies)

### Usage
This plugin is thought for easy debug logging.

```javascript
var smartDebug = require("smartdebug");

smartDebug.log("This message is not shown");
smartDebug.activate(true);
smartDebug.log("This debug message is shown");
```

The above code produces debug messages like this:
![debugmessage.png](https://mediaserve.lossless.digital/github.com/pushrocks/smartdebug/debugmessage.png)
