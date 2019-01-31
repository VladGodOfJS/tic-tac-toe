class HumanPlayer extends Player {
	
	constructor(type) {
		super(type);
	}
	
	move(board) {
		 
		let rowValue;  
		let colValue;
		 
		while (true) {
			
			let rowInput = parseInt(prompt('Enter row [1;3]:'));
			let colInput = parseInt(prompt('Enter col [1;3]:'));
			
			rowValue = rowInput - 1;
			colValue = colInput - 1;	
			
			if (board.isEmpty(rowValue, colValue)) {
				break;
			} else {
				console.log('\n\nError! This square is not empty! \n\n')
			}
		}			
		
		board.setElement(rowValue, colValue, this.playerType);
	}
}