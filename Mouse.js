function Mouse(name, weight) {
	this.name = name;
	this.dead = false;
	this.weight = weight;
}

Mouse.prototype.die = function() {
	this.dead = true;
}

module.exports = Mouse;