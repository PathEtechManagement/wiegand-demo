const Gpio = require('onoff').Gpio;

const blue = new Gpio(17, 'out');
blue.writeSync(1);

const red = new Gpio(18, 'out');
red.writeSync(1);

exports.blink = function(color){
    if(color === "red"){
        red.writeSync(0);

        setTimeout(function(){
            red.writeSync(1);
        },500)
    }else if (color === "blue"){
        blue.writeSync(0);

        setTimeout(function(){
            blue.writeSync(1);
        },500)
    }
};
