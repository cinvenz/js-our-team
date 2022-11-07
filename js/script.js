const cardsTeam = document.querySelector('.cards-team')

const arrTeam = [
	{
		name: 'Wayne Barnett',
		work: 'Founder & CEO',
		photo: 'wayne-barnett-founder-ceo.jpg',
	},
	{
		name: 'Angela Caroll',
		work: 'Chief Editor',
		photo: 'angela-caroll-chief-editor.jpg',
	},
	{
		name: 'Walter Gordon',
		work: 'Office Manager',
		photo: 'walter-gordon-office-manager.jpg',
	},
    {
		name: 'Angela Lopez',
		work: 'Social Media Manager',
		photo: 'angela-lopez-social-media-manager.jpg',
	},
	{
		name: 'Scott Estrada',
		work: 'Developer',
		photo: 'scott-estrada-developer.jpg',
	},
	{
		name: 'Barbara Ramos',
		work: 'Graphic Designer',
		photo: 'barbara-ramos-graphic-designer.jpg',
	},
];

console.table(arrTeam);

for (let i = 0; i < arrTeam.length; i++) {
	console.log(`Studente numero ${i}: ${arrTeam[i].name} ${arrTeam[i].work}`);
    
    // let img = document.createElement("img");
    // img.src = `img/${arrTeam[i].photo}`;
    // cardsTeam.append(img)
    
    const eleCards = document.createElement('div');
    eleCards.classList.add('containercards')
    cardsTeam.append(eleCards)
    eleCards.innerHTML += `<img class="img-fluid" src="img/${arrTeam[i].photo}" alt="">`
    eleCards.innerHTML += `<h5>${arrTeam[i].name}</h5>`;
    eleCards.innerHTML += `<p>${arrTeam[i].work}</p>`;

}