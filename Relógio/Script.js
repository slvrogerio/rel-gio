const ceu = document.getElementById('ceu');
const astro = document.getElementById('astro');

setInterval(function(){
  showTime(ceu, astro,  new Date())
}, 1000);

function showTime(ceu, astro, data) {

  function messagem () {

    const hora = data.getHours()

    if (hora >= 6 && hora < 12) {
      dia();
      return 'Bom dia!';
    } else if (hora >= 12 && hora < 18) {
      dia();
      return 'Boa Tarde!';
    } else {
      noite();
      return 'Boa Noite!';
    }  
  }
 function dia () {
    ceu.classList.remove('noite');
    ceu.classList.add('dia');
    astro.classList.remove('lua');
    astro.classList.add('sol');
  }

  function noite () {
    ceu.classList.remove('dia');
    ceu.classList.add('noite');
    astro.classList.remove('sol');
    astro.classList.add('lua');
  }

  astro.innerHTML = '<h1>' + data.toLocaleTimeString() + '</h1>'+
    '<h2>' + messagem() + '</h2>';
}
