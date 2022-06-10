const ul = document.querySelector(".container");

function criarCards(objt){
    let li = document.createElement("li");
    li.classList.add("card");
    let h2 = document.createElement("h2");
    h2.innerText = objt.nome;
    let h3 = document.createElement("h3");
    h3.innerText = objt.idade;
    let p3 = document.createElement("p");
    p3.innerText = objt.bio;
    let img = document.createElement("img");
    img.src = objt.urlImage;

    li.append(img, h2, h3, p3);
    ul.appendChild(li)
}

function iterandoData(array){
    array.forEach(element => { criarCards(element)
    });
}

iterandoData(pessoas)