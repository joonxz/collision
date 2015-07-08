var player = new Player(200, 200, 40, 'red');

var entities = [];

// entities.push(new Enemy(300, 300, 20, 'green'));
// entities.push(new Enemy(150, 150, 20, 'blue'));
entities.push(player);

for (var i = 0; i < 10; i++) {
  entities.push(new Enemy(Math.random() * 1000, Math.random() * 1000, 20, 'blue'));
};
