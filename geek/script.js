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

let listFigure = [];
let listPainting = [];

let secaolistFigure = document.getElementsByClassName('actioFigure')[0]
