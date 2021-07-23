// ------------- Mapeamento dos Seletores -------------
            //a) Para abrir o modal
const civilModal = document.querySelectorAll('div.dir-civil')
const trabModal = document.querySelector('div.dir-trab')
            //b) Para sair do modal
const sair = document.querySelectorAll('.modal a.botao')
const esc = document.querySelectorAll('a.btn-esc')
            //c) The element class = "Modal Wrapper"
const modalWrapperCivil = document.getElementsByClassName('modal-wrapper')[0]
const modalWrapperTrab = document.getElementsByClassName('modal-wrapper')[1]



// ------------ Eventos do Mapeamento --------------
            //a) listener para abrir Abrir
civilModal.forEach( (event) => {
    //Faz-se necerssário o uso do forEach devido a seleção de mais de 1 elemento do documento html. -> SelectorAll
    event.addEventListener('click', () => {
        abrir('civil')
    })
})
trabModal.addEventListener('click', () => {
    abrir('trabalhista')
})

            //b) Listener para sair do Modal
sair.forEach( event => {
    event.addEventListener('click',fechar)
})
esc.forEach( event => {
    event.addEventListener('click', fechar)
})



// ----------- Funções dos Eventos -----------------
function abrir(direitoModal) {
            //a) adiciona class="on" dentro do Elemento    
    return (direitoModal == 'civil') ? modalWrapperCivil.classList.add('on') : modalWrapperTrab.classList.add('on')
}
function fechar() {
            //b) remove class="on" dentro do Elemento
    modalWrapperCivil.classList.remove('on')
    modalWrapperTrab.classList.remove('on')
}