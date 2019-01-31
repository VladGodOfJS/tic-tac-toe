
class MediumLevel extends CpuLevel {

    constructor() {
        super();
        console.log(' class Mediumlevel...')
    }


    makeMove(board, type) {

        let row;
        let col;
        let counter_limited = 0;

        while (true) {
            
            counter_limited ++
            if(counter_limited >50){
                break;
            }
            console.log('while');


            row = parseInt(Math.random() * 3);
            col = parseInt(Math.random() * 3);

            let perspective = false

            // ?

            for (let i = 0; i < 2; i++) {

                let row_1 = board.data[i];
                if (row == i) {
                    if (row_1[0] != 2 && row_1[1] != 2 && row_1[2] != 2) perspective = true;
                }
            }

            console.log(board.data[0]);

            if (board.isEmpty(row, col) && perspective) {
                break;
            }
        }

        board.setElement(row, col, type);

    }
}
