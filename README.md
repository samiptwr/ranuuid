# ranuuid
**A simple Node.js package to generate UUIDs of your desired length, providing unique IDs tailored to your needs.**

You can view this in https://www.npmjs.com/package/ranuuid

## Installation

Install the package via npm:

```bash
npm i ranuuid 
```

## How to use

```javascript
const ranuuid = require('ranuuid') //importing package

const uuid = ranuuid.v12(20) //generate 20 characters long uuid via v12 engine

console.log(uuid)
```

You can specify the length you want by simply passing it as a parameter to ``` v12() ``` 

**Now you are good to go!**
