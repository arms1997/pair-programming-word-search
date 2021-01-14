const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));

    // for horizontal check 
    // for (let l of horizontalJoin) {
    //     if (l.includes(word)) 
    //         return true;
    // }

    // let arr = []
    // for(let i = 0; i < letters[0].length; i++){
    //     arr.push([])
    //     for(let j = 0; j < letters.length; j++) {
    //         arr[i].push(letters[j][i]);
    //     }
    
    //     if(arr[i].join('').includes(word)){
    //         return true
    //     }else if(arr[i].reverse().join('').includes(word)){
    //         return true
    //     }
    // }

    //letters[0].length = columns left/right
    //letters.length = rows up/down
    let visitedLetters = [];
    const HEIGHT = letters.length;
    const WIDTH = letters[0].length;

    const checkCells = function(cell, direction) {
        let x = cell.x;
        let y = cell.y;
        // console.log('x:', x, 'y:', y);
        if (x < 0 || y < 0)
            return false;
        if (x > WIDTH || y > HEIGHT)
            return false;
        else {
            visitedLetters.push(letters[x][y]);
            
            checkCells({x: x + direction.leftRight, y: y + direction.updown}, direction);
        }
        //console.log(visitedLetters)
    };

    //diagonally right and down
    // for (let i = 0; i < WIDTH; i++) {
    //     let y = 0;
    //     checkCells({x: i, y: y}, {leftRight: 1, upDown: 1});
    //     if(visitedLetters.join('').includes(word)) {
    //         return true;
    //     }else if
    //     (visitedLetters.reverse().join('').includes(word)){

    //     }

    //     visitedLetters = [];
    // }

    //Diagonally Right and Up
    // for (let i = 0; i < WIDTH; i++) {
    //     let y = 0;
    //     checkCells({x: y, y: i}, {leftRight: 1, upDown: 1});
    //     if(visitedLetters.join('').includes(word)) {
    //         return true;
    //     }
    //     visitedLetters = [];
    // }

    // Diagonally left and up 
    // for(let i = WIDTH; i > 0; i--){
    //     let y = 0;
    //     checkCells({x: i, y: y}, {leftRight: 1, updown: -1});
    //     if(visitedLetters.join('').includes(word)) {
    //         return true;
    //     }
    //     console.log(visitedLetters)
    //     visitedLetters = [];
    // }

    // Right and diagonally down right
    // for(let i = 0; i < WIDTH; i++){
    //     let x = 0;
    //     checkCells({x: x, y: i}, {leftRight: 1, updown: 1});
    //     if(visitedLetters.join('').includes(word)) {
    //         return true;
    //     }
    //     console.log(visitedLetters);
    //     visitedLetters = [];
    // }

    // Right and diagonally down left
    // for(let i = 0; i < WIDTH; i++){
    //     let x = 0;
    //     checkCells({x: x, y: i}, {leftRight: 1, updown: -1});
    //     if(visitedLetters.join('').includes(word)) {
    //         return true;
    //     }
    //     console.log(visitedLetters);
    //     visitedLetters = [];
    // }

    //Down and diagonally down right
    // for(let i = 0; i < HEIGHT; i++){
    //     let x = 0;
    //     checkCells({x: i, y: x}, {leftRight: 1, updown: 1});
    //     if(visitedLetters.join('').includes(word)) {
    //         return true;
    //     }
    //     console.log(visitedLetters);
    //     visitedLetters = [];
    // }

    //Down and diagonally up right
    // for(let i = 0; i < HEIGHT; i++){
    //     let x = 0;

    //     checkCells({x: i, y: x}, {leftRight: -1, updown: 1});
    //     if(visitedLetters.join('').includes(word)) {
    //         return true;
    //     }
    //     console.log(visitedLetters);
    //     visitedLetters = [];
    // }

    //Down and diagonally up right
    // for(let i = 0; i < HEIGHT; i++){
    //     let x = WIDTH;

    //     checkCells({x: i, y: x}, {leftRight: -1, updown: -1});
    //     if(visitedLetters.join('').includes(word)) {
    //         return true;
    //     }
    //     console.log(visitedLetters);
    //     visitedLetters = [];
    // }
    
    

    return false
}

const result = wordSearch([
    ['S', 'W', 'C', 'F', 'S', 'U', 'A', 'L'],
    ['D', 'F', 'I', 'N', 'F', 'C', 'L', 'O'],
    ['L', 'F', 'I', 'F', 'Q', 'U', 'I', 'L'],
    ['E', 'M', 'J', 'Z', 'E', 'V', 'R', 'N'],
    ['F', 'H', 'C', 'S', 'G', 'E', 'R', 'L'],
    ['S', 'F', 'R', 'E', 'N', 'V', 'Y', 'S'],
    ['I', 'Z', 'T', 'W', 'A', 'P', 'E', 'I'],
    ['E', 'D', 'I', 'A', 'K', 'I', 'A', 'D'],
    ['S', 'Z', 'K', 'N', 'N', 'U', 'A', 'L'],
  ], 'SEIN')

//console.log(result)
// wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'SEINFELD')

//   wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'FRANK')
module.exports = wordSearch;