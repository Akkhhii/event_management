const menudiv = document.querySelector('.menudiv')
const menu = document.querySelector('#menu')
const cross = document.querySelector('#cross')
const links = document.querySelector('.links')
let flag = false

const menuOpen = ()=>{
    menudiv.style.width = '60%'
    cross.style.display = 'inline-block'
    menu.style.display = 'none'
    links.style.display = ''

}
const menuClose = ()=>{
    menudiv.style.width = '0%'
    cross.style.display = 'none'
    menu.style.display = 'inline-block'
    links.style.display = 'none'
}

menu.addEventListener('click', ()=>{
    if(flag == false){
        flag = true
        menuOpen();
    }
})
cross.addEventListener('click', ()=>{
    if(flag == true){
        flag = false
        menuClose();
    }
})

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    const offsetTop = section.offsetTop-10;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
  