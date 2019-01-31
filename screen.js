

class Screen {

    constructor() {

    }

    draw(board) {

        let rows = document.querySelectorAll('.rows');
        console.log(rows);



        for (let i = 0; i <= 2; i++) {
            let cells = rows[i].querySelectorAll('div');

            console.log(cells);

            for (let j = 0; j <= 2; j++) {

                //3 if

                if (board.data[j][i] == 0) {
                    cells[j].textContent = '...';
                }
                if (board.data[j][i] == 1) {
                    cells[j].textContent = 'X'
                }
        
                if (board.data[j][i] == 2) {
                    cells[j].textContent = '0';
                }



            }
        }


    }

}