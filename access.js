const tibbit08 = require("tibbit-08");
const gpio = require("@tibbo-tps/gpio");

var blue = gpio.init("S9A");
blue.setDirection("output");
blue.setValue(1);

var red = gpio.init("S11A");
red.setDirection("output");
red.setValue(1);

var db = require("./modules/db.js");

var blink = function(color){
    if(color === "red"){
        red.setValue(0);
    }else if (color === "blue"){
        blue.setValue(0);
    }

    setTimeout(function(){
        blue.setValue(1);
        red.setValue(1);
    },500)
};

tibbit08.init(["s21","s23"],100)
    .on("dataReceivedEvent", (data) => {
        var userId = data.value;

        db.getUser(userId, function(err, rows){
            if(err === null && rows.length > 0){
                db.writeEvent(userId, "allowed");
                blink("blue");
            }else{
                db.writeEvent(userId, "denied");
                blink("red");
            }
        })
    });

setInterval(function(){},1000);