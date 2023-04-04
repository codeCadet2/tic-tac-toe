const gameboard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')
const startCells = [
    "", "", "", "", "", "", "", "", ""
]
let go = 'circle'
infoDisplay = 'Circle goes first'

function createBoard() {
startCells.forEach((cell, index) => {
    const cellElement = document.createElement( 'div')
    cellElement.createList.add('square')
    cellElement.id = index
    cellElement.addEventListener('click', addGo)
    gameboard.append(cellElement)
})

}

createBoard()

function addGo(e) {

    const goDisplay = createElement('div')
    goDisplay.classList.add(go) 
    e.target.append(goDisplay)
    go = go === 'circle' ? 'cross' : 'circle'
    infoDisplay.textContent = 'It is now' + go + "'s go"
    e.target.removeEventListener('click', addGo)
    checkScore()
}
function checkScore() {
   const allSquares = document.querySelectorAll('.square')
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    winningCombos.forEach(array => {
        const circleWins = 
        array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('circle'))
           
            if (circleWins) {
              infoDisplay.textDisplay = 'O Wins!'  
              allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
    
    })

    winningCombos.forEach(array => {
        const crossWins = 
        array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('cross'))
           
            if (crossWins) {
              infoDisplay.textDisplay = 'X Wins!'  
              allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
    
    })
}