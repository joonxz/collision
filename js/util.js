var Util = {};

Util.pointInCircle = function (point, circle) {
  return (distance(point, circle) <= circle.radius);
};

Util.circlesCollide = function (a, b) {
  return (distance(a, b) <= (a.radius + b.radius));
};

Util.distance = function (a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};
