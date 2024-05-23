document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.getElementById('hamburgerMenu')
  const menuContent = document.getElementById('menuContent')

  hamburgerMenu.addEventListener('click', function () {
    if (menuContent.style.display === 'block') {
      menuContent.style.display = 'none'
    } else {
      menuContent.style.display = 'block'
    }
  })

  // Optional: Close the menu when clicking outside of it
  document.addEventListener('click', function (event) {
    if (!hamburgerMenu.contains(event.target) && !menuContent.contains(event.target)) {
      menuContent.style.display = 'none'
    }
  })
})

// carousel

function updateCarousel() {
  const carousel = document.getElementById('carousel')
  const items = Array.from(carousel.children)
  console.log({ items })
  let currentIndexClass = 0 // Start with the center item
  items.forEach((item, index) => {
    item.classList.remove('carousel-item-center', 'carousel-item-faded')

    // Añadir clase central solo si el índice está dentro del rango [2, 10)
    if (index >= 2 && index < 2 + 9) {
      item.classList.add('carousel-item-center')
    } else {
      item.classList.add('carousel-item-faded')
    }
  })
}

updateCarousel()

const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

// animations and transitions

let currentIndex = 0
let prevIndex
const images = document.querySelectorAll('.carousel-item')

const totalImages = Object.keys(images).length

const imageWidth = images[1].getBoundingClientRect().x

// right arrow funcionality
rightArrow.addEventListener('click', () => {
  //   carousel.classList.add('sliding-transition')

  prevIndex = currentIndex
  currentIndex = (currentIndex + 1) % totalImages

  carousel.style.transform = `translateX(-${imageWidth}px)`

  setTimeout(() => {
    carousel.appendChild(images[prevIndex])
    // carousel.classList.remove('sliding-transition')
    carousel.style.transform = ''
    updateCarousel()
  }, 500)
})

// left arrow funcionality
leftArrow.addEventListener('click', () => {
  prevIndex = currentIndex
  currentIndex = (currentIndex - 1 + totalImages) % totalImages

  // Move Carousel to the left by one image, and insert the image at currentIndex at the beginning of carousel's DOM
  carousel.style.transform = `translateX(-${imageWidth}px)`
  carousel.insertBefore(images[currentIndex], carousel.firstChild)

  // Now, let's start the transition effect, from -520 px to 0 px.
  setTimeout(() => {
    carousel.style.transform = ''
    // carousel.classList.add('sliding-transition')

    updateCarousel()
  }, 10)

  setTimeout(() => {
    // By removing the transition class, we ensure that the transition only occurs when we want it to and that we have full control over the carousel's movement.
    carousel.classList.remove('sliding-transition')
  }, 490)
})
