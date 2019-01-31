class CpuPlayer extends Player {
	
	constructor(type, level) {
		super(type);
		this.cpuLevel = level;
	}
	
	move(board) {
		this.cpuLevel.makeMove(board, this.playerType);		
	}	
	
}