//
const ponteiroSegundo = document.querySelector('.ponteiro__segundo');
const ponteiroMinuto = document.querySelector('.ponteiro__minuto');
const ponteiroHora = document.querySelector('.ponteiro__hora');

function atualiza(){
    const date = new Date();
    const segundo = date.getSeconds();
    const minuto = date.getMinutes();
    const hora = date.getHours();

    ponteiroSegundo.style.transform = `translate(0, -30%) rotate(${segundo * 6}deg)`;
    ponteiroMinuto.style.transform = `translate(0, -50%) rotate(${minuto * 6}deg)`;
    ponteiroHora.style.transform = `translate(0, -50%) rotate(${hora * 30}deg)`;

    console.log(segundo)
};

setInterval(atualiza, 1000);