const EventEmitter = require('event');

class Player extends EventEmitter {}

var player = new Player();

player.on('play', () => {
  console.log('正在播放')
})

player.emmit
