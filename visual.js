class Visual {
	
	constructor() {
		
	}
	
	showBoard(board) {
		
		for (let i = 0; i < board.getRowsCount(); i++) {

			let line = '';

				for (let j = 0; j < board.getColsCount(); j++) {
					
					let value = board.getElement(i, j);
					let symbol = this.getSymbol(value);
					
					line = line + symbol + ' ';
				}

			console.log(line);
		}
		
		console.log('\n\n');		
	}
	
	getSymbol(value) {
		
		if (value === 1) {
			return 'X';
		} else if (value === 2) {
			return 'O';
		}
		
		return '_';
	}
}