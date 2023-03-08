/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in cardTex/schede
*/

/*
-> creare un array di objects 
-> ogni object ha:
° nome
° ruolo
° foto
-> stampare in console
-> stamapre nel DOM 
-> trasformare la stringa foto in un img
-> Organizzare i singoli membri in card/schede 
*/

let containerEl= document.getElementById('container');
const teamMembers =[

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: ' Chief Editor',
        photo: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer	',
        photo: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'img/barbara-ramos-graphic-designer.jpg'
    }

];
for(let i =0; i<teamMembers.length;i++ ){

    console.log(teamMembers[i]);

    let card = document.createElement('div');
    let cardImg = document.createElement('div');
    let cardTex = document.createElement('div');
    let img = document.createElement('img');

    card.setAttribute('id','c'+i);

    containerEl.append(card);
    card.append(cardImg);
    cardImg.append(img);
    card.append(cardTex);
    
    img.src+=teamMembers[i].photo;

    cardTex.innerHTML+= 'Nome: '+ teamMembers[i].name + '<br>';

    cardTex.innerHTML+= 'Ruolo: '+ teamMembers[i].role ;
};

