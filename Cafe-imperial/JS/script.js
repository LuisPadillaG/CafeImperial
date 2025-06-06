
//HEADER
/*window.addEventListener("scroll", function(){
    var header = document.querySelector("header"); //selecciona al header
    header.classList.toggle("abajo",window.scrollY>0); //mientras sea mayor a 0, cambia a la clase de abajo
})
//HAMBURGUESA
document.querySelector('.menu-hamburguesa').addEventListener('click', function() {
  document.querySelector('header').classList.toggle('menu-activo');
});*/

//achicar header
window.addEventListener("scroll", function(){
  var header = document.querySelector("nav");
  header.classList.toggle("abajo",window.scrollY>0); //mientras sea mayor a 0, cambia a la clase de abajo
})

//hamburguesa
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

//la imagen se mueve
window.addEventListener('scroll', function() {
  const parallaxImage = document.getElementById('parallaxImage');
  const scrollPosition = window.scrollY;
  parallaxImage.style.transform = `translateY(${scrollPosition * -0.5}px)`;
});
//el rectangulo se deberia de mover
window.addEventListener('scroll2', function() {
  const rectangulo = document.getElementsByClassName('rectangulo');
  const scrollPosition2 = window.scrollY;
  rectangulo.style.transform = `translateY(${scrollPosition2 * -0.10}px)`;
});

window.addEventListener('scroll', () => {
  const image = document.querySelector('.rotating-image');
  const scrollPosition = window.scrollY;
  const rotation = scrollPosition * 0.2; 
  image.style.transform = `rotate(${rotation}deg)`;
});

window.sr = ScrollReveal();
    sr.reveal('h3',{
      duration: 1000,
      origin: 'bottom',
      distance: '-100px'
    });
    sr.reveal('p',{
      duration: 1500,
      origin: 'bottom',
      distance: '-100px'
    });

    sr.reveal('h2',{
      duration: 2000,
      origin: 'bottom',
      distance: '-100px'
    });
    
    sr.reveal('.ubicacionesuno',{
      duration: 1900,
      origin: 'right',
      distance: '-100px'
    });
    sr.reveal('.ubicacionesdos',{
      duration: 2000,
      origin: 'right',
      distance: '-100px'
    });
    sr.reveal('.mensaje',{
      duration: 500,
      origin: 'bottom',
      distance: '-30px'
    });



/* este parallax no me jalo por el window.scrollY, después veo q rollo
const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function() {
  let offset = window.scrollY;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});*/
