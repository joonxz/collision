var player = new Player(200, 200, 40, 'red');

var entities = [];

entities.push(player);

for (var i = 0; i < 10; i++) {
  entities.push(new Enemy(Math.random() * 1000, Math.random() * 1000, 20, 'blue'));
};
