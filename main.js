let scrolled = false;

document.addEventListener('scroll', () => {
  if(this.pageYOffset >= 100 && !scrolled) {
    smoothScroll()
  }
})

let smoothScroll = () => {
  window.scrollTo({
    top: 1064,
    bahavior: 'smooth'
  })

  scrolled = true
}