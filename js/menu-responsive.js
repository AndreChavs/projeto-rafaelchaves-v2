class MobileNavbar{
    constructor (mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu) //botão do menu
        this.navList = document.querySelector(navList) //lista da barra de navegação
        this.navLinks = document.querySelectorAll(navLinks) //links da barra de navegação

        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            //console.log(index / 7 + 0.3);
            link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        })
    }

    handleClick(){
        //console.log(this)
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLinks()
    }

    addClickEvent(){
        this.mobileMenu.addEventListener('click', this.handleClick);
    }

    init(){
        if (this.mobileMenu) {
            this.addClickEvent()
        }
        return this
    }
}

var mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".menu",
    ".nav-item"
)

mobileNavbar.init()