function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        alert ('elemento nao encontrado');
        console.log('elemento nao encontrado');
    }

    if (elemento != null && elemento.localName === 'audio') {
         elemento.play();
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
        tecla.classList.remove('ativa'); 
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
