
let btnMenu = document.getElementById('btn-menu')//Cria uma variavel
let menu = document.getElementById('navega-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})//Faz o botão de menu funcionar no mobile(para abrir a aba que contem: Inicio, Sobre, Estatistica, Galeria e contato

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})//Faz a aba aberta fechar ao clicar nela

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})//Faz a aba fechar ao clicar na overlay
