const url = "https://hallan-miranda.github.io/WDD231-Let-s-Bora/chamber/members.json";
const memberCards = document.querySelector('#cards');

async function getMembers(){
    const response = await fetch(url);
    const data = await response.json();

    creatCard(data.memeber);
};

function creatCard(cards){
    cards.forEach(card => {
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
        memberCards.appendChild(div);
    });

};

getMembers();

