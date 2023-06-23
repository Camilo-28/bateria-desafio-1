console.log('conectado')
function empezarSonido(e) {
    

    const sonido = this.document.querySelector(`audio[data-nota="${e.keyCode}"]`);
    const nota = this.document.querySelector(`.nota[data-nota="${e.keyCode}"]`);
    /* if (!sonido)  return; */
    if(!sonido){
        alert("Presione solo las letras mostradas en pantalla");
    }
    sonido.currentTime = 0;
    sonido.play();
    nota.classList.add('sonando');  
    console.log(sonido);
}

function eliminarTransicion(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('sonando');
    console.log(this);
}
 

const notas = document.querySelectorAll('.nota');

notas.forEach(nota => nota.addEventListener('transitionend', eliminarTransicion));
window.addEventListener('keydown', empezarSonido);