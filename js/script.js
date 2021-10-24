let container = document.getElementsByClassName('container')[0]
let images = ["banana.jpg", "cytrus.jpg", "peach.jpg", "pineapple.jpg", "strawberry.jpg", "weed.jpg", "pineapple.jpg", "strawberry.jpg", "banana.jpg", "cytrus.jpg", "weed.jpg", "peach.jpg"]
let time = document.getElementById('time')
let second = 60
let t = 0

let interval = setInterval(() => {

  second--
  time.innerHTML = second

  if(second === 0){
    clearInterval(interval)
    container.innerHTML = ''
    alert('Game over')
  }
  
}, 1000)


function shuffle(array) {
  let arrLength = array.length, r;

  while (arrLength != 0) {

    r = Math.floor(Math.random() * arrLength)
    arrLength--

    [array[arrLength], array[r]] = [array[r], array[arrLength]]
  }


  for (let i = 0; i < array.length; i++) {
    container.innerHTML += `
      <div class="box" onclick="flipCard(this)">
        <h1 class="front-face">H</h1>
        <img class="back-face" src="./photo/${array[i]}" alt="img">
      </div>
    `
  }

}

shuffle(images)

let count = 0
let arr = []


function flipCard(item) {
  if (count < 2) {
    if (isItemExist(item)) {
      item.firstElementChild.classList.add('flip');

      count++
      arr.push(item)

      if (count === 2 && arr[0].lastElementChild.getAttribute("src") === arr[1].lastElementChild.getAttribute("src")) {
        setTimeout(() => {
          arr[0].classList.add("unVisible")
          arr[1].classList.add("unVisible")
          arr[0].innerHTML = ''
          arr[1].innerHTML = ''
          arr = []
          count = 0

          let items = document.getElementsByClassName('back-face')
          if(items.length === 0) alert("You Win !!!")
        }, 1000)
      }
      else if (count === 2) {
        setTimeout(() => {
          arr[0].firstElementChild.classList.remove('flip')
          arr[1].firstElementChild.classList.remove('flip')
          arr = []
          count = 0

        }, 1000)
      }
    }

  }
}

function isItemExist(item) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return false
    }
  }

  return true
}
