 function monitorTamanho(){

    var logo = document.getElementsByClassName('logo')
    if(window.innerWidth >= 768 ) {

        document.getElementById('menuburguer').style.position = 'relative'
        
    }



    
}
function clickMenu(){
    

    if(burguermenu.style.display == 'block'){
        burguermenu.style.display = 'none'
    } else {
        burguermenu.style.display = 'block'
    }

    
}

function mousedentro(){
    if (burguermenu.style.display == 'none'){
        burguermenu.style.display = 'block'
    } 
}
function mousesai(){
    if (burguermenu.style.display == 'block'){
        burguermenu.style.display = 'none'
    }
}