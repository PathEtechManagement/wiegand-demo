# wiegand-demo
An attempt to port this wiegand demo to raspberry pi

Module requirements.

Wiegand.

Installation
$ npm install --save wiegand

Running

Make sure you export your GPIO pins according to the epoll docs:

#!/bin/sh 
echo 17 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio17/direction
echo both > /sys/class/gpio/gpio17/edge

Note: If you are using the GPIO command to export, it does not automatically set the edge for you. You must do it separately:

$ gpio export 17 in
$ echo both > /sys/class/gpio/gpio17/edge
-----------------------------------------

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
