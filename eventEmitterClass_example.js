var events = require('events');

var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
	console.log("Listener 1 executed");
}

var listener2 = function listener2(){
	console.log("Listener 2 executed");
}

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' listener(s) listening to connection event.');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener2);
console.log("Listener2 will not listen now");

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' listener(s) listening to connection event.');

eventEmitter.emit('connection');

console.log("Program ended");


