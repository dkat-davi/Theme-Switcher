const body = document.querySelector('body')
const ball = document.querySelector('.ball')

let theme = null
let ballRightPosition = null

const getTheme = () => {
    theme = localStorage.getItem('theme')
    ballRightPosition = localStorage.getItem('right')
    body.style.backgroundColor = theme
    ball.style.right = ballRightPosition
}

const switchTheme = () => {
    if (ballRightPosition == '5px') {
        localStorage.setItem('right', '140px')
        localStorage.setItem('theme', 'var(--light)')
    }
    else{
        localStorage.setItem('right', '5px')
        localStorage.setItem('theme', 'var(--dark)')
    }

    getTheme()
}

ball.addEventListener('click', switchTheme)
window.addEventListener('load', getTheme)