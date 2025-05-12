fetch('https://fakestoreapi.com/products')
.then((res => res.json()))
.then((data)=> {
  
    let cont = document.getElementById("container")


    data.map(dates =>{


 let card = document.createElement("div")
    card.classList.add("cards")

    let imgAPI = document.createElement("img")
       imgAPI.src = dates.image;
    imgAPI.classList.add("imgs")

      let text = document.createElement("h4")
    text.innerText =dates.title
    text.classList.add("texts")

    let prise= document.createElement("prise")
    prise.innerText = dates.price;
    prise.classList.add("prises")


    card.appendChild(imgAPI);
    card.appendChild(text);
    card.appendChild(prise);
    cont.appendChild(card);
    
    })
});

///////////

