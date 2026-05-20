const cards = document.querySelector('#cards')
const exemple = [
    {
        "name": "Hallan Miranda",
        "tag": "volunter",
        "photoUrl": "https://hallan-miranda.github.io/WDD231-Let-s-Bora/images/profile.jpg",
        "email": "teste@londrinacc.org",
        "phone": "43 2345-6789",
        "url": "hallan-miranda.com"
    }
]

function creatCard(card){

    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p');
    let img = document.createElement('img');
    let span = document.createElement('span');

    div.classList.add('card')

    h3.textContent = `${card.name}`;
    p1.textContent = `${card.tag}`;
    span.textContent = `E-mail: ${card.email}\nPhone: ${card.phone}\nSite: ${card.url}`;

    img.setAttribute("src", card.photoUrl);
    img.setAttribute("alt", `image of ${card.name}`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "40px");
    img.setAttribute("heigth", "40px");

    div.appendChild(h3);
    div.appendChild(p1);
    div.appendChild(img);
    div.appendChild(span);
    cards.appendChild(div);

}

exemple.forEach(card => {
    creatCard(card)
});

