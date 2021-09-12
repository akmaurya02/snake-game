let inputDirection = {x: 0, y: 0}
let lastInputDirection

window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp":
            if (inputDirection.y === 0) {
                inputDirection = {x: 0, y: -1}
            }
            break
        case "ArrowDown":
            if (inputDirection.y === 0) {
                inputDirection = {x: 0, y: 1}
            }
            break
        case "ArrowLeft":
            if (inputDirection.x === 0) {
                inputDirection = {x: -1, y: 0}
            }
            break
        case "ArrowRight":
            if (inputDirection.x === 0) {
                inputDirection = {x: 1, y: 0}
            }
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}