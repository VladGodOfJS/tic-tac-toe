class Game {
	
	constructor() {
		
	}
	
	start() {
		
		let visual = new Visual();
		let board = new Board();
		
		
		let player1 = new HumanPlayer(1);
		let player2 = new CpuPlayer(2, new MediumLevel());
		
		let firstPlayerTurn = true; 

		let screen = new Screen();
		
		while ( !this.isGameOver(board)) {
			
			if (firstPlayerTurn) {
				player1.move(board);
			} else {
				player2.move(board);
			}
			
			firstPlayerTurn = !firstPlayerTurn;
			visual.showBoard(board);
			screen.draw(board);
			
		}
		
	}
	
	isGameOver(board) {
		//checks........
		return false;
	}
}

let game = new Game();
game.start();