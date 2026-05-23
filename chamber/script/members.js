const url = "https://hallan-miranda.github.io/WDD231-Let-s-Bora/chamber/members.json";
const cCards = document.querySelector('#cards');
const companys = document.querySelector('#companysCard');
const company = document.querySelector('#companys')
const grid = document.querySelector('#grid');
const list = document.querySelector('#list');


async function getMembers(append, type){
    const response = await fetch(url);
    const data = await response.json();

    if(type == "grid"){
        creatCardGrid(data.memeber, append);
    }
    else if(type == "list")
    {
        creatCardList(data.memeber, append);

    }

};


function creatCardGrid(cards, addTo){
    if(!addTo) return;
    document.querySelectorAll('.card').forEach(card => card.remove());


    cards.forEach(card => {
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let img = document.createElement('img');
        let div2 = document.createElement('div')
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
    
        div.classList.add('card');
        div2.classList.add('information');
    
        h3.textContent = `${card.name}`;
        p1.textContent = `${card.adress}`;
        p3.textContent = `Phone: ${card.phone}`;
        p4.textContent = `Site: ${card.url}`;
        

        img.setAttribute("src", card.image);
        img.setAttribute("alt", `image of ${card.name}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "40px");
        img.setAttribute("heigth", "40px");

        div2.appendChild(p2);
        div2.appendChild(p3);
        div2.appendChild(p4);
    
        div.appendChild(h3);
        div.appendChild(img);
        div.appendChild(div2);
        addTo.appendChild(div);
    });

    
    console.log('grid criada')

    
};

function creatCardList(cards, addTo){
    if(!addTo) return;
    document.querySelectorAll('.card').forEach(card => card.remove());


    cards.forEach(card => {
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let div2 = document.createElement('div')
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let a = document.createElement('a');

        div.classList.add('card');
        div2.classList.add('information');

        h3.textContent = `${card.name}`;
        p2.textContent = `${card.adress}`;
        p3.textContent = `${card.phone}`;
        a.textContent = `Datails`;
        
        a.setAttribute('href', card.url)

        div2.appendChild(p2);
        div2.appendChild(p3);
        div2.appendChild(a);

        div.appendChild(h3);
        div.appendChild(div2);
        addTo.appendChild(div);
    });
            console.log('lista criada')

};

grid.addEventListener('click', () => {
    company.classList.remove('list')
    console.log('grid')
    getMembers(companys, "grid");

});

list.addEventListener('click', () => {
    company.classList.add('list')
    console.log('lista')
    getMembers(companys, "list");

});

getMembers(cCards, "grid");
getMembers(companys, "grid");

