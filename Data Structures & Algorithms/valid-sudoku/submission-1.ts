class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = [];
        const coluns = [];
        const boxes = [];

        // coluns;
        for (let i=0;i<9;i++) {
            for (let j=0;j<9;j++) {
                const v = board[j][i];
                if (v == ".") continue;
                if (!coluns[i]) coluns[i] = new Set();
                if (coluns[i].has(v)) return false;
                else coluns[i].add(v);
            }
        }

        for (let i=0;i<9;i++) {
            for (let j=0;j<9;j++) {
                const v = board[i][j];
                if (v == ".") continue;
                if (!rows[i]) rows[i] = new Set();
                if (rows[i].has(v)) return false;
                else rows[i].add(v);
            }
        }

        let j = 0;
        while (j < 9) {
            let n = 0;
            if (j < 3) n = 0;
            else if(j < 6) n = 3;
            else if(j < 9) n = 6;
            for (let i=0;i<9;i++) {
                let p = 0;
                if (i < 3) p=0;
                else if (i < 6) p=1;
                else if (i < 9) p=2;

                const v = board[i][j];
                if (v == ".") continue;
                if (!boxes[n+p]) boxes[n+p] = new Set();
                if (boxes[n+p].has(v)) return false;
                else boxes[n+p].add(v);
            }
            j++
        }
        
        return true;
    }
}

// board=[
// ["1","2",".",".","3",".",".",".","."],
// ["4",".",".","5",".",".",".",".","."],
// [".","9","8",".",".",".",".",".","3"],
// ["5",".",".",".","6",".",".",".","4"],
// [".",".",".","8",".","3",".",".","5"],
// ["7",".",".",".","2",".",".",".","6"],
// [".",".",".",".",".",".","2",".","."],
// [".",".",".","4","1","9",".",".","8"],
// [".",".",".",".","8",".",".","7","9"]]


