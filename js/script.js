//

const ponteiroSegundo = document.querySelector('.ponteiro__segundo');
const ponteirominuto = document.querySelector('.ponteiro__minuto');
const ponteirohora = document.querySelector('.ponteiro__hora');

function atualiza(){
    const date = new Date();
    const segundo = date.getSeconds();
    const minuto = date.getMinutes();
    const hora = date.getHours();

    ponteiroSegundo.style.transform = `translate(0, -50%) rotate(${segundo * 6}deg)`;
    ponteirominuto.style.transform = `translate(0, -50%) rotate(${minuto * 6}deg)`;
    ponteirohora.style.transform = `translate(0, -50%) rotate(${hora * 30}deg)`;
};

setInterval(atualiza, 1000);