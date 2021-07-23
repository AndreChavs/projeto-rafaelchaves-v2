// ------------- Mapeamento dos Seletores -------------
const civilModal = document.querySelectorAll('div.dir-civil')
const trabModal = document.querySelector('div.dir-trab')


// ------------ Eventos do Mapeamento --------------

civilModal.forEach( (event) => {
    //Faz-se necerssário o uso do forEach devido a seleção de mais de 1 elemento do documento html. -> SelectorAll
    event.addEventListener('click',abrir)
})

trabModal.addEventListener('click', abrir)

// ----------- Funções dos Eventos -----------------

function abrir() {
    alert(`Está funcionando`)
}