# wiegand-demo
An attempt to port this wiegand demo to raspberry pi

**Note** 
Wiegand Reader data lines are 5v and will need to be connected to a logic level converter to protect the pi's 3.3v GPIO

Wiegand Reader D0 connected to GPIO 17
Wiegand Reader D0 connected to GPIO 18
Status Led Red connected to GPIO 27
Status Led Blue connected to GPIO 22


# Module requirements.

## Wiegand.
### Installation
```bash
$ npm install --save wiegand
```

Make sure you export your GPIO pins according to the epoll docs:

```bash
#!/bin/sh 
echo 17 > /sys/class/gpio/export
echo 18 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio17/direction
echo in > /sys/class/gpio/gpio18/direction
echo both > /sys/class/gpio/gpio17/edge
echo both > /sys/class/gpio/gpio18/edge
```
**Note**: If you are using the GPIO command to export, it does not automatically set the edge for you. You must do it separately:

```bash
$ gpio export 17 in
$ echo both > /sys/class/gpio/gpio17/edge
$ gpio export 18 in
$ echo both > /sys/class/gpio/gpio18/edge
```

## Express.
### Installation
```bash
$ npm install express
```
## Socket.io
### Installation
```bash
$ npm install socket.io --save
```
## sqlite3.
### Installation
```bash
$ npm install sqlite3
```
## onoff.
### Installation
```bash
$ npm install onoff
```
