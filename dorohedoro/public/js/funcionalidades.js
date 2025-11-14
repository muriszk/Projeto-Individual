// VOLUMES ##########################################################################
// variável de apoio para carrossel de volumes.
var volumes = ['assets/imgs/vol1.webp', 'assets/imgs/vol2.jpg', 'assets/imgs/vol3.jpg', 'assets/imgs/vol4.webp', 'assets/imgs/vol5.jpg', 'assets/imgs/vol6.jpg', 'assets/imgs/vol7.jpg', 'assets/imgs/vol8.jpg', 'assets/imgs/vol9.jpg', 'assets/imgs/vol10.jpg', 'assets/imgs/vol11.jpg', 'assets/imgs/vol12.jpg', 'assets/imgs/vol13.jpg', 'assets/imgs/vol14.jpg', 'assets/imgs/vol15.jpg', 'assets/imgs/vol16.jpg', 'assets/imgs/vol17.jpg', 'assets/imgs/vol18.jpg', 'assets/imgs/vol19.jpg', 'assets/imgs/vol20.jpg', 'assets/imgs/vol21.jpg', 'assets/imgs/vol22.jpg', 'assets/imgs/vol23.jpg', 'assets/imgs/vol24.jpg']
var cont = 0;

function atualizarCarrosselVolumes() {
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");

    if (cont < 0) cont = volumes.length - 1;
    if (cont >= volumes.length) cont = 0;

    box1.innerHTML = `<img src="${volumes[cont]}">`;
    box2.innerHTML = `<img src="${volumes[(cont + 1) % volumes.length]}">`;
    box3.innerHTML = `<img src="${volumes[(cont + 2) % volumes.length]}">`;

    for (i = 0; i < volumes.length; cont++) {
        pBox1.innerHTML = `Volume ${cont}`
    }
}

function mudarDireita() {
    cont++;
    atualizarCarrosselVolumes();
}

function mudarEsquerda() {
    cont--;
    atualizarCarrosselVolumes();
}

// PERSONAGENS ###########################################################


// variável de apoio para carrossel de personagens
var personagens = ['assets/imgs/1caimanSlide.jpeg', 'assets/imgs/2nikaido.jpeg', 'assets/imgs/3haru.jpeg', 'assets/imgs/4dokuga.jpeg', 'assets/imgs/5shin.jpeg', 'assets/imgs/6noi.jpeg']
var indexPersonagem = 0;

// função para alterar imagem de carrossel.
function atualizarCarrosselPersonagens() {
    if (indexPersonagem < 0) { indexPersonagem = personagens.length - 1 };
    if (indexPersonagem >= personagens.length) { indexPersonagem = 0 };

    Pbox.innerHTML = `<img src="${personagens[indexPersonagem]}">`

}

function mudarPersonagemDireita() {
    indexPersonagem++;
    atualizarCarrosselPersonagens();
    console.log(indexPersonagem + 'seta direita');
}

function mudarPersonagemEsquerda() {
    indexPersonagem--;
    atualizarCarrosselPersonagens();
    console.log(indexPersonagem + 'seta esquerda');
}



