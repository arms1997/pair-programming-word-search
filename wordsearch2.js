const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));

  const HEIGHT = letters.length
  const WIDTH = letters[0].length

  // for horizontal check 
  for (let l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }

  // //for Vertical Check
  let arr = []
  for (let i = 0; i < WIDTH; i++) {
    arr.push([])
    for (let j = 0; j < HEIGHT; j++) {
      arr[i].push(letters[j][i])
    }

    if (arr[i].join('').includes(word) || arr[i].reverse().join('').includes(word)) {
      return true
    }
  }

  //for Diagonal Check
  let visitedLetters = []
  const checkCells = function (xPosition, yPosition, direction) {
    // console.log(xPosition, yPosition, letters[xPosition][yPosition])
    console.log(direction.x)
    if (xPosition > WIDTH || yPosition > HEIGHT) {
      return false;
    }

    if (!letters[xPosition][yPosition]) {
      return false;
    }

    visitedLetters.push(letters[xPosition][yPosition])
    checkCells(xPosition + direction.x, yPosition + direction.y, direction)
  }

  for (let i = 0; i < WIDTH; i++) {
    let y = 0
    checkCells(i, y, {x: 1, y: 1});

    if (visitedLetters.join('').includes(word) || visitedLetters.reverse().join('').includes(word)) {
      return true
    }
  }

  for (let i = 0; i < WIDTH; i++) {
    let y = 0
    checkCells(y, i, {x: 1, y: 1})

    if (visitedLetters.join('').includes(word) || visitedLetters.reverse().join('').includes(word)) {
      return true
    }
  }

  for (let i = WIDTH - 1; i > 0; i--) {
    let y = 0
    checkCells(y, i, {x: 1, y: -1})

    if (visitedLetters.join('').includes(word) || visitedLetters.reverse().join('').includes(word)) {
      return true
    }
  }

  for (let i = 0; i < WIDTH; i++) {
    let y = WIDTH - 1
    
    checkCells(i, y, {
      x: 1, 
      y: -1
    })

    if (visitedLetters.join('').includes(word) || visitedLetters.reverse().join('').includes(word)) {
      return true
    }
  }

  return false
}

const result = wordSearch([
  ['N', 'E', 'I', 'N', 'S', 'U', 'A', 'L'],
  ['I', 'F', 'I', 'N', 'F', 'C', 'L', 'O'],
  ['E', 'F', 'I', 'F', 'Q', 'U', 'I', 'L'],
  ['A', 'M', 'J', 'E', 'E', 'V', 'S', 'N'],
  ['F', 'H', 'C', 'S', 'E', 'E', 'R', 'L'],
  ['S', 'F', 'R', 'E', 'I', 'I', 'Y', 'A'],
  ['I', 'Z', 'T', 'N', 'A', 'P', 'N', 'I'],
  ['E', 'D', 'I', 'A', 'K', 'I', 'A', 'E'],
  ['S', 'Z', 'A', 'E', 'I', 'N', 'A', 'S'],
], 'SEIN')

console.log(result)

module.exports = wordSearch;