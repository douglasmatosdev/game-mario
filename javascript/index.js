const $ = document.querySelector.bind(document)

const mario = $('.mario')
const pipe = $('.pipe')

const jump = () => {
    mario.classList.add('jump')

    const timer = setTimeout(() => {
        mario.classList.remove('jump')
        clearTimeout(timer)
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 120 && pipePosition > 0  && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        mario.style.bottom = `${marioPosition}px`

        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }
}, 10);

document.addEventListener('keydown', jump)