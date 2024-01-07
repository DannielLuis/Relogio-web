//

const ponteiroSegundo = document.querySelector('.ponteiro__segundo');

function atualiza(){
    const date = new Date();
    const segundo = date.getSeconds();

    ponteiroSegundo.style.transform = `translate(0, -50%) rotate(${segundo * 6}deg)`;
};

setInterval(atualiza, 1000);