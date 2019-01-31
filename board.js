class Board {
	
	constructor() {
		this.data = [
		
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]		
		];
	}
	
	setElement(row, col, value) {
		this.data[row][col] = value;
	}
	
	getElement(row, col) {
		return this.data[row][col];
	}
	
	getRowsCount() {
		return 3;
	}
	
	getColsCount() {
		return 3;
	}
	
	isEmpty(row, col) {
		return this.data[row][col] === 0;
	}
	
}