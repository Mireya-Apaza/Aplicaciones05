const menus = document.querySelector('.menu');
const menu = document.querySelector('.menu-navegacion');

// console.log(menu)
// console.log(papita)

menus.addEventListener('click', () =>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != menus  ){
        
        menu.classList.toggle("spread")
    }
})