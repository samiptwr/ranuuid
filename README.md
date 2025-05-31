# ranuuid
**This is a simple package for *nodejs* to generate the uuid of your desired length for the fullfilment of requirement of unique id.**

## How to use

First you have to install through npm via this command:

```bash
npm i ranuuid 
```

Then write this code to use in your project.

```javascript
const ranuuid = require('ranuuid') //importing package

const uuid = ranuuid.v12(20) //using v12 engine to generate. 20 represents the length of uuid.

console.log(uuid)
```

This will first import ranuuid package. Then 
use our v12 engine to generate the random uuid. you can pass your desired length as a parameter.

** Now you are good to go! **