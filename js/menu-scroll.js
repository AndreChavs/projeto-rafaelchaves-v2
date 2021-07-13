window.addEventListener('scroll', function () {
    let header = document.querySelector('header');  //variável local que recebe a seleção do elemento 'header' do documento HTML pelo API do DOM.        
    let windowPosition = window.scrollY > 0;    //variável local que recebe a posição da janela de scroll na posição Y (vertical) > 0    
    header.classList.toggle('scrolling-active', windowPosition);    
})