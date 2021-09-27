let inputDirection = { x: 0, y: 0 }
let lastInputDirection

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}

// Handling Touch Events
let pageWidth = window.innerWidth || document.body.clientWidth
let threshold = Math.max(1, Math.floor(0.01 * pageWidth))
let touchstartX = 0
let touchstartY = 0
let touchendX = 0
let touchendY = 0

const limit = Math.tan(45 * 1.5 / 180 * Math.PI)

window.addEventListener('touchstart', e => {
    e.preventDefault()
    let touchObj = e.changedTouches[0];
    touchstartX = touchObj.screenX
    touchstartY = touchObj.screenY
})

window.addEventListener('touchend', e => {
    e.preventDefault()
    let touchObj = e.changedTouches[0];
    touchendX = touchObj.screenX
    touchendY = touchObj.screenY
    handleGesture(e)
})

function handleGesture(e) {
    let x = touchendX - touchstartX
    let y = touchendY - touchstartY
    let xy = Math.abs(x / y)
    let yx = Math.abs(y / x)
    if (Math.abs(x) > threshold || Math.abs(y) > threshold) {
        if (yx <= limit) {
            if (x < 0) { // Left
                changeLeft()
            } else { // Right
                changeRight()
            }
        }
        if (xy <= limit) {
            if (y < 0) { // Up
                changeUp()
            } else { // Down
                changeDown()
            }
        }
    } else {
        console.log("tap")
    }
}

function changeRight() {
    if (inputDirection.x === 0) {
        inputDirection = { x: 1, y: 0 }
    }
}

function changeLeft() {
    if (inputDirection.x === 0) {
        inputDirection = { x: -1, y: 0 }
    }
}

function changeDown() {
    if (inputDirection.y === 0) {
        inputDirection = { x: 0, y: 1 }
    }
}

function changeUp() {
    if (inputDirection.y === 0) {
        inputDirection = { x: 0, y: -1 }
    }
}

// Handling Keyboard Events
window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp":
            changeUp()
            break
        case "ArrowDown":
            changeDown()
            break
        case "ArrowLeft":
            changeLeft()
            break
        case "ArrowRight":
            changeRight()
            break
    }
})