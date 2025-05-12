async function Products() {
    try {
        
        const res = await fetch('https://fakestoreapi.com/products');
        
        
        const data = await res.json();

        let cont = document.getElementById("container");

        data.map(product => {
            let card = document.createElement("div");
            card.classList.add("cards");

            let imgAPI = document.createElement("img");
            imgAPI.src = product.image;
            imgAPI.classList.add("imgs");

            let text = document.createElement("h4");
            text.innerText = product.title;
            text.classList.add("texts");

            let prise = document.createElement("div");
            prise.innerText = product.price;
            prise.classList.add("prises");

            card.appendChild(imgAPI);
            card.appendChild(text);
            card.appendChild(prise);

            cont.appendChild(card);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}
fetchProducts();
