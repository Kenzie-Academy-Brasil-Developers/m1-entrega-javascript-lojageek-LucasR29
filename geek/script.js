let listFigure = []
let listPainting = []

function createActionItem(image , name , value){
    let item = {
        imagem: image,
        nome: name,
        valor: value
    }
    listFigure.push(item)
}


function createPaintingItem(image , name , value){
    let item = {
        imagem: image,
        nome: name,
        valor: value
    }
    listPainting.push(item)
}

createActionItem("../assets/img/actions/animewoman.jpg", 'Anime woman', "R$ 100,00")
createActionItem("../assets/img/actions/starwarspersonagem.jpg", 'Star Wars', "R$ 150,00")
createActionItem("../assets/img/actions/dragonballpersonagem.jpg", 'Dragon Ball', "R$ 90,00")
createActionItem("../assets/img/actions/animewoman.jpg", 'Anime woman', "R$ 100,00")
createActionItem("../assets/img/actions/starwarspersonagem.jpg", 'Star Wars', "R$ 150,00")
createActionItem("../assets/img/actions/dragonballpersonagem.jpg", 'Dragon Ball', "R$ 90,00")
createActionItem("../assets/img/actions/animewoman.jpg", 'Anime woman', "R$ 100,00")
createActionItem("../assets/img/actions/starwarspersonagem.jpg", 'Star Wars', "R$ 150,00")
createActionItem("../assets/img/actions/dragonballpersonagem.jpg", 'Dragon Ball', "R$ 90,00")
createActionItem("../assets/img/actions/animewoman.jpg", 'Anime woman', "R$ 100,00")
createActionItem("../assets/img/actions/starwarspersonagem.jpg", 'Star Wars', "R$ 150,00")
createActionItem("../assets/img/actions/dragonballpersonagem.jpg", 'Dragon Ball', "R$ 90,00")
createActionItem("../assets/img/actions/animewoman.jpg", 'Anime woman', "R$ 100,00")
createActionItem("../assets/img/actions/starwarspersonagem.jpg", 'Star Wars', "R$ 150,00")
createActionItem("../assets/img/actions/dragonballpersonagem.jpg", 'Dragon Ball', "R$ 90,00")
createActionItem("../assets/img/actions/animewoman.jpg", 'Anime woman', "R$ 100,00")
createActionItem("../assets/img/actions/starwarspersonagem.jpg", 'Star Wars', "R$ 150,00")
createActionItem("../assets/img/actions/dragonballpersonagem.jpg", 'Dragon Ball', "R$ 90,00")
createPaintingItem("../assets/img/painting/clock.jpg", 'Clock', 'R$ 150,00')
createPaintingItem("../assets/img/painting/gamepad.jpg", 'Gamepad', 'R$ 250,00')
createPaintingItem("../assets/img/painting/personagem.jpg", 'StarWars', 'R$ 300,00')
createPaintingItem("../assets/img/painting/clock.jpg", 'Clock', 'R$ 150,00')
createPaintingItem("../assets/img/painting/gamepad.jpg", 'Gamepad', 'R$ 250,00')
createPaintingItem("../assets/img/painting/personagem.jpg", 'StarWars', 'R$ 300,00')
createPaintingItem("../assets/img/painting/clock.jpg", 'Clock', 'R$ 150,00')
createPaintingItem("../assets/img/painting/gamepad.jpg", 'Gamepad', 'R$ 250,00')
createPaintingItem("../assets/img/painting/personagem.jpg", 'StarWars', 'R$ 300,00')
createPaintingItem("../assets/img/painting/clock.jpg", 'Clock', 'R$ 150,00')
createPaintingItem("../assets/img/painting/gamepad.jpg", 'Gamepad', 'R$ 250,00')
createPaintingItem("../assets/img/painting/personagem.jpg", 'StarWars', 'R$ 300,00')
createPaintingItem("../assets/img/painting/clock.jpg", 'Clock', 'R$ 150,00')
createPaintingItem("../assets/img/painting/gamepad.jpg", 'Gamepad', 'R$ 250,00')
createPaintingItem("../assets/img/painting/personagem.jpg", 'StarWars', 'R$ 300,00')
createPaintingItem("../assets/img/painting/clock.jpg", 'Clock', 'R$ 150,00')
createPaintingItem("../assets/img/painting/gamepad.jpg", 'Gamepad', 'R$ 250,00')
createPaintingItem("../assets/img/painting/personagem.jpg", 'StarWars', 'R$ 300,00')
createPaintingItem("../assets/img/painting/clock.jpg", 'Clock', 'R$ 150,00')
createPaintingItem("../assets/img/painting/gamepad.jpg", 'Gamepad', 'R$ 250,00')
createPaintingItem("../assets/img/painting/personagem.jpg", 'StarWars', 'R$ 300,00')
createPaintingItem("../assets/img/painting/clock.jpg", 'Clock', 'R$ 150,00')
createPaintingItem("../assets/img/painting/gamepad.jpg", 'Gamepad', 'R$ 250,00')
createPaintingItem("../assets/img/painting/personagem.jpg", 'StarWars', 'R$ 300,00')







let secaolistFigure = document.getElementsByClassName('actionItens')[0]
let secaolistPainting = document.getElementsByClassName('paintingItens')[0]

console.log(secaolistFigure)

for(let i = 0; i < listFigure.length; i++){
    let elementoLista = document.createElement('li')
    let nome = document.createElement('h2')
    let img = document.createElement('img')
    let value = document.createElement('span')
    img.src = listFigure[i].imagem
    nome.innerText = `${listFigure[i].nome}`
    value.innerText = `${listFigure[i].valor}`
    elementoLista.append(img, nome, value)
    secaolistFigure.appendChild(elementoLista)
}


for(let i = 0; i < listPainting.length; i++){
    let elementoLista = document.createElement('li')
    let nome = document.createElement('h2')
    let img = document.createElement('img')
    let value = document.createElement('span')
    img.src = listPainting[i].imagem
    nome.innerText = `${listPainting[i].nome}`
    value.innerText = `${listPainting[i].valor}`
    elementoLista.append(img, nome, value)
    secaolistPainting.appendChild(elementoLista)
}
