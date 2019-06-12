const getRandomColor = () => {
  const COLORS = [
    'blue',
    'red',
    'green',
    'lightcoral',
    'lightblue',
    'yellow',
    'orange',
    'rebeccapurple',
    'lavendar',
    'white',
    'whitesmoke',
    'magenta',
    'cyan',
  ]
  return COLORS[Math.floor(Math.random() * COLORS.length)]
}

// Unique Event Listener #1/2: `mouseover/mouseleave` on images
const images = document.querySelectorAll('img')
images.forEach(img => {
  img.addEventListener('mouseover', function() {
    this.style.opacity = 0.5
    this.style.filter = 'sepia(0.15)'
  })

  img.addEventListener('mouseleave', function() {
    this.style.opacity = 1
    this.style.filter = 'sepia(0)'
  })
})

// Unique Event Listener #3: `scroll` - show alert once page end has been hit
window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    alert(`You've reached the end of the page!`)
  }
})

// Unique Event Listener #4: `click` - change background color each button click
const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const COLORS = [
      'blue',
      'red',
      'green',
      'lightcoral',
      'lightblue',
      'yellow',
      'orange',
      'rebeccapurple',
      'lavendar',
    ]
    document.body.style.background = getRandomColor()
  })
})

// Unique Event Listener #5: `dblclick` plays cute sound
document.body.addEventListener('dblclick', () => {
  const audio = new Audio('assets/cartoon_pluck_hair.mp3')
  audio.play()
})

// Unique Event Listener #6: `copy` acts as a broken highlighter
document.addEventListener('copy', (e) => {
  const selection = document.getSelection()
  const selectedElement = selection.focusNode.parentElement
  selectedElement.style.background = getRandomColor()
})

// Unique Event Listener #7: `DOMContentLoaded` - logo loop da loops
const logo = document.querySelector('.logo-heading')
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    logo.classList.add('rotate')
  }, 1000)
})

// Unique Event Listener #8: `keyup` - not very useful keyboard shortcuts
document.addEventListener('keyup', function(e) {
  const mainContent = document.querySelector('div.container.home')
  switch(e.key) {
    case 'h':   // hide
      mainContent.style.display = 'none';
      break
    case 's':   // show
      mainContent.style.display = 'block';
      break
    default:
      break
  }
})

// Unique Event Listener #9: `click` - prevent nav items from refreshing page
const navItems = document.querySelectorAll('.nav-link')
navItems.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
  })
})

// Unique Event Listener #10: `keypress` - prevent Space from scrolling page
document.addEventListener('keypress', (e) => {
  if (e.key === ' ') e.preventDefault()
})


// Below example outlines an example of event propagation being stopped
const footer = document.querySelector('footer')
const footerText = footer.querySelector('p')

footer.addEventListener('click', (e) => {
  console.log('Footer cliked!')
})

footerText.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log('Footer text cliked!')
})
