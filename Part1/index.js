const board = []

function play(clickedId) {
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickId] = 'X'
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickId] = 'O'
    }

    const topLeft = board[0]
    const topCenter = board[1]
    const topRight = board[2]
    const middleLeft = board[3]
    const middleCenter = board[4]
    const middleRight = board[5]
    const bottomLeft = board[6]
    const bottomCenter = board[7]
    const bottomRight = board[8]

    if (topLeft !== undefined && topLeft === topRight && topLeft === topCenter) {
        alert(`${topLeft} is the winner!`)
    }

    if (middleLeft !== undefined && middleLeft === middleRight && middleLeft === middleCenter) {
        alert(`${middleLeft} is the winner!`)
    }

    if (bottomLeft !== undefined && bottomLeft === bottomRight && bottomLeft === bottomCenter) {
        alert(`${bottomLeft} is the winner!`)
    }

    if (topLeft !== undefined && topLeft === bottomLeft && topLeft === middleLeft) {
        alert(`${topLeft} is the winner!`)
    }

    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner!`)
    }

    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner!`)
    }

    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner!`)
    }

    if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
        alert(`${topRight} is the winner!`)
    }

    const boardFull = true
    for (i = 0; i < board.length; i++) {
        if (board[i] === undefined) {
            boardFull = false
        }
        if (boardFull === true) {
            alert("It is a cat's game. There is no winner.")
        }
    }

}
