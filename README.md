# wiegand-demo
An attempt to port this wiegand demo to raspberry pi

*Note* 
Wiegand Reader data lines are 5v and will need to be connected to a logic level converter to protect the pi's 3.3v GPIO

Wiegand Reader D0 connected to GPIO 17
Wiegand Reader D0 connected to GPIO 18
Status Led Red connected to GPIO 27
Status Led Blue connected to GPIO 22


Module requirements.

Wiegand.

Installation

$ npm install --save wiegand
-----------------------------------------
Running

Make sure you export your GPIO pins according to the epoll docs:

#!/bin/sh 
echo 17 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio17/direction
echo both > /sys/class/gpio/gpio17/edge

Note: If you are using the GPIO command to export, it does not automatically set the edge for you. You must do it separately:

$ gpio export 17 in
$ echo both > /sys/class/gpio/gpio17/edge


Express.

Installation
$ npm install express
-----------------------------------------

Socket.io

Installation
$ npm install socket.io --save
-----------------------------------------
sqlite3.

Installation
$ npm install sqlite3
-----------------------------------------
onoff.

Installation
$ npm install onoff
-----------------------------------------
