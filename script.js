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

// CARD 
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

// CAROSELLO 
function carosello(){

    let wrapper = document.querySelector("#last-ads-carousel")
    
    let ads = [
        {titolo : 'Motori' , category :'audi Q3', prezzo :'5000'},
        {titolo : 'Immobile' , category :'Trilocale', prezzo :'5000'},
        {titolo : 'Lavoro' , category :'Imbianchino', prezzo :'5000'},
        {titolo : 'Arredamento' , category :'Divano', prezzo :'5000'},
        {titolo : 'Abbigliamento' , category :'T-shirt', prezzo :'5000'},
        {titolo : 'Elettronica' , category :'Iphone', prezzo :'5000'},
    ]
    
    ads.forEach(ad => {
        let li = document.createElement("li");
    
        li.classList.add("glide__slide");
        
        li.innerHTML =  ` 
                <div class="card" style="height: 29rem; width: 20rem;">
                <img class="card-img-top" src="https://picsum.photos/200" alt="Card image cap">
                <button class="btn btn-like"><i class="far fa-thumbs-up"></i></button>
                <div class="card-body">
                <h5 class="card-title">${ad.titolo}</h5>
                <div class="d-flex justify-content-between">
                <p class="card-text">${ad.prezzo} $</p>
                <p class="card-text me-2">${ad.category}</p>
                </div>
                <a href="#" class="btn btn-primary1 rounded-pill ">Vai all'annuncio</a>
                </div>
                </div>
        
        ` 
        wrapper.appendChild(li);
    })

    let likes = document.querySelectorAll('.btn-like')

    likes.forEach(btn => {
    btn.addEventListener('click', () => {
     btn.classList.toggle('active')
     btn.children[0].classList.toggle('far')
     btn.children[0].classList.toggle('fas')
    })
 }) 

}
carosello()

// fetch('./2021-04-29-js-live-coding-pt2.json')
// .then(data=> data.json())
// .then(data=>{

//   function populateAds(data){
//       let wrapperAnn = document.querySelector
//         ('#ads-wrapper')
//         wrapperAnn.innerHTML = ''
//         // console.log(data);

//          data.forEach( ad=> {
//            let cardAnn = document.createElement('div')

//            cardAnn.classList.add('col-10' , 'col-sm-6' , 'col-xl-4')

//            cardAnn.innerHTML = 
//            `
//            <div class="p-card-ads mt-4 m-0 text-center"><a href = "./ad.html?${ad.id}" class="text-annunci">
//            <img class="img-fluid rounded-img" src="https://picsum.photos/id/1/410/330">
//            <h2 class="fs-5 pt-3">${ad.name}</h2>
//            <p class="fs-5">${ad.category}</p>
//            <p class="fs-5">${ad.price} $</p>
//            </a></div> 
//            ` 

//            wrapperAnn.appendChild(cardAnn)
//          })
//   }