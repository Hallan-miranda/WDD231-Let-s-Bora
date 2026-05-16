const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
const card = document.querySelector("#cards")

async function getProphets() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = prophets =>
{
    prophets.forEach(prophet => {
        let section = document.createElement('section');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let dBirth = document.createElement('p')
        let pBirth = document.createElement('p')

        h2.textContent = `${prophet.name}`;
        dBirth.textContent =`Date of Birth: ${prophet.birthdate}`
        pBirth.textContent =`Place of Birth: ${prophet.birthplace}`

      img.setAttribute('src', prophet.imageurl);
      img.setAttribute('alt', `image of ${prophet.name}`);
      img.setAttribute('loading', 'lazy');
      img.setAttribute('width', '340');
      img.setAttribute('hegth',  '440');

      section.appendChild(h2);
      section.appendChild(dBirth);
      section.appendChild(pBirth);
      section.appendChild(img);

      cards.appendChild(section);
    });
}

getProphets();