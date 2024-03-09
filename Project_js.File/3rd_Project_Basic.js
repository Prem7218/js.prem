const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval( () => {
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleString()
}, 1000)

