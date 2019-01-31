class Player {
	
	constructor(type) {
		this.playerType = type;
	}
	
	move(board) {
		throw new Error('You must override the method move()!');
	}
}