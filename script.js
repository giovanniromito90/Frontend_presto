let nav = document.querySelector('#presto-navbar')
let btnNav = document.querySelector('#p-nav-btn')

document.addEventListener('scroll' , function(){


    if(window.scrollY > 400){
        nav.classList.add('p-nav-scrolled')

    } else {
        nav.classList.remove('p-nav-scrolled')
    }
   
})

btnNav.addEventListener('click' , function(){

    btnNav.classList.toggle('open')

})

function creaCard(){
    let categorieswrapper = document.querySelector("#categories-wrapper")
    let categories = [
      {nome : 'Motori' , icon :'<i class=" fas fa-car display-6"></i> ' , delay : 100},
      {nome : 'Immobili' , icon :' <i class="fas fa-home display-6"></i>', delay : 200},
      {nome : 'Lavoro' , icon : '<i class="fas fa-briefcase display-6"></i>' , delay : 300},
      {nome : 'Arredamento' , icon : '<i class="fas fa-couch display-6"></i>' , delay : 400},
      {nome : 'Abbigliamento' , icon :' <i class="fas fa-tshirt display-6"></i>', delay : 100 },
      {nome : 'Elettronica' , icon :' <i class="fas fa-laptop display-6"></i>' , delay : 200},
      {nome : 'Sport' , icon :' <i class="fas fa-football-ball display-6"></i> ' , delay : 300},
      {nome : 'Musica' , icon :' <i class="fas fa-music display-6"></i> ', delay : 400}

    ]

    categories.forEach(categoria => {
      let card= document.createElement('div');

      card.classList.add('col-12' , 'col-md-6' , 'col-xl-4' , 'col-xxl-3' , 'mb-5' )
      card.innerHTML =
      `<div class="card p-card-border" data-aos="flip-right" data-aos-once="true" data-aos-delay="${categoria.delay}">
      <div class="card-body text-center">
      <div>  
      <h5 class="fs-2 card-title pt-5">${categoria.nome} </h5>
      <div class="py-4"> ${categoria.icon}</div>
      </div>
      <a href="#" class="btn btn-primary1 rounded-pill mb-5"><span class="mx-3">Scopri di più</span><i class="fas fa-chevron-right"></i></a>
      </div>
      </div>

      ` 
      categorieswrapper.appendChild(card)

    })
}

creaCard()

