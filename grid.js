const gridSize = 21

export function randomGridPosition() {
    return {
        x: Math.ceil(Math.random() * gridSize),
        y: Math.ceil(Math.random() * gridSize)
    }
}

export function outsideGrid(snake) {
    return (snake.x < 1 || snake.x > gridSize) || (snake.y < 1 || snake.y > gridSize)
}