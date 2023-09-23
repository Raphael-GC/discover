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

  // Substituir a imagem
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    // Se estiver light mode, substituir pela imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // Se estiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
