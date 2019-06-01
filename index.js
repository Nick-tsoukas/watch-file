const fs = require('fs');

fs.watch('./index.html', () => {
    console.log('this file has changed')
})