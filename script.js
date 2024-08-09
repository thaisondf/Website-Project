function toggleMode() {
    // Document é a representação da página inteira em formato de objeto JavaSript, ao colocar o . está acessando as propriedades e funcionalidades
    // Acessando o html através do comando document.documentElement
    const html = document.documentElement
    html.classList.toggle('light')

    //Selecionando a tag img
    const img = document.querySelector("#profile img")
    //substituindo a img
    if(html.classList. contains('light')) {
        img.setAttribute('src', './icons/profilepic-light.png')
     } else {
        img.setAttribute('src', './icons/profilepic.png')
     }
}