(() => {
  const wrapper = document.getElementById('app')
  const timer = wrapper.querySelector('.timer')
  const tomatoBtn = wrapper.querySelector('.tomato')
  const breakBtn = wrapper.querySelector('.break')
  const resetBtn = wrapper.querySelector('.reset')

  const startCountDown = (intervalLength = '25:00') => {
    timer.innerText = intervalLength
    wrapper.classList.add('progress')

    const resetCountDown = () => {
      clearInterval(countdown)
      timer.innerText = '25:00'
      wrapper.classList.remove('progress')
    }

    const makeNoise = () => wrapper.querySelector('.noise').play()

    const countdown = setInterval(() => {
      const [m, s] = timer.innerText.split(':').map(t => parseInt(t))
      const timeLeftInSeconds = m * 60 + s - 1
      const minutesLeft = Math.floor(timeLeftInSeconds / 60)
      const secondsLeft = timeLeftInSeconds - minutesLeft * 60

      const minutesLeftText = minutesLeft > 9 ? minutesLeft : `0${minutesLeft}`
      const secondsLeftText = secondsLeft > 9 ? secondsLeft : `0${secondsLeft}`

      timer.innerText = `${minutesLeftText}:${secondsLeftText}`

      if (minutesLeft === 0 && secondsLeft === 0) {
        resetCountDown()
        makeNoise()
      }
    }, 1000)

    resetBtn.addEventListener('click', () => resetCountDown())
  }

  tomatoBtn.addEventListener('click', () => startCountDown('25:00'))
  breakBtn.addEventListener('click', () => startCountDown('05:00'))
})()
