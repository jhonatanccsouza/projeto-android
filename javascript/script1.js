 function monitorTamanho(){
    if(screen.orientation.type == "landscape-primary" && window.innerWidth == 568){
        document.body.header.style.position == 'static'

    }else if(window.innerWidth >= 768 ) {

        document.body.header.style.position = 'relative'
        
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