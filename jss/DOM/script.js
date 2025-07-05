const card = document.getElementById('cartao');

const nome = document.getElementById('nome');

const bio = document.getElementById('bio');

const p = document.createElement('p');

card.style.background = 'black';

card.style.color = 'white';

bio.style.fontStyle = 'italic';

p.innerText = 'Novo texto';

p.style.fontstyle = 'italic';

card.appendChild(p);

