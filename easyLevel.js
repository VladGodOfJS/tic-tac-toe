class EasyLevel extends CpuLevel {
	
	constructor() {
		super();
		console.log('class EasyLevel......');
	}
	
	makeMove(board, type) {
		
		let row;
		let col;
		
		while (true) {
			
			row = parseInt(Math.random() * 3);
			col = parseInt(Math.random() * 3);
			
			if (board.isEmpty(row, col)) {
				break;
			}
		}		
		
		board.setElement(row, col, type);
		
	}
}