const fs = require('fs');

let timesChanged = 0;

fs.watch('./index.html', () => {
    timesChanged++;
    console.log('this file has changed', timesChanged)
})