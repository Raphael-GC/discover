function toggleMode() {
  const html = document.documentElement

  // Modo extenso
  /*if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }*/

  // Modo mais prático
  html.classList.toggle("light")
}