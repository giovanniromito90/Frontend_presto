let nav = document.querySelector('#presto-navbar')


document.addEventListener('scroll' , function(){



    if(window.scrollY > 400){
        nav.classList.add('p-nav-scrolled')

    } else {
        nav.classList.remove('p-nav-scrolled')
    }
   
})

