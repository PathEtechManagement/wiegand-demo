const wiegand = require('wiegand');
const w = wiegand();

w.begin({ d0: 17, d1: 18});
    w.on('data', (length, data) => {
    console.log('Got', length, 'bits from wiegand with data:' data);
});

// Prevent app from closing
setInterval(function(){},60000);
