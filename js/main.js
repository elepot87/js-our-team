// Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
// Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.

// 1. Creo un array di oggetti con i membri del team in mio possesso. Ogni oggetto avrà tre chiavi: immagine, nome e didascalia

const teamMembers = [
  // Member 1
  {
    img: "./img/wayne-barnett-founder-ceo.jpg",
    firstLastName: "Wayne Barnett",
    description: "Founder & CEO",
  },
  //   Member 2
  {
    img: "./img/angela-caroll-chief-editor.jpg",
    firstLastName: "Angela Caroll",
    description: "Chief Editor",
  },
  //   Member 3
  {
    img: "./img/walter-gordon-office-manager.jpg",
    firstLastName: "Walter Gordon",
    description: "Office Manager",
  },
  //   Member 4
  {
    img: "./img/angela-lopez-social-media-manager.jpg",
    firstLastName: "Angela Lopez",
    description: "Social media manager",
  },
  //   Member 5
  {
    img: "./img/scott-estrada-developer.jpg",
    firstLastName: "Scott Estrada",
    description: "Developer",
  },
  //   Member 6
  {
    img: "./img/barbara-ramos-graphic-designer.jpg",
    firstLastName: "Barbara Ramos",
    description: "Graphic Designer",
  },
];

// 2. Individuare nel DOM l'elemento a cui appendere i team member

const teamContainer = document.querySelector(".team-container");

// 3. Iterare gli oggetti dell'array e aggiungere il markup della card del team member nel DOM. Fare funzione che si può riutilizzare

getTeamMember(teamMembers, teamContainer);

// 4. Utente inserisce valori nel form, clicca sul btn Add e nel DOM viene stampato il nuovo team member

const btnAdd = document.getElementById("addMemberButton");

btnAdd.addEventListener("click", function () {
  // Richiamo la funzione per aggiungere un nuovo membro
  const newMember = addNewMember();
  //
  //   Ripulisco gli input
  emptyImput("name");
  emptyImput("role");
  emptyImput("image");
});

/***************************
FUNZIONI
****************************/

// Funzione per restituire oggetti dell'array (membri del team) e stamparli nel DOM

function getTeamMember(teamMembers, teamContainer) {
  // Pulizia di elementi
  teamContainer.innerHTML = "";

  //   Iterazione degli oggetti dell'array e inserimento del markup nel DOM
  for (let i = 0; i < teamMembers.length; i++) {
    const teamItem = teamMembers[i];
    console.log(teamItem);
    teamContainer.innerHTML += ` <div class="team-card">
    <div class="card-image">
      <img src="${teamItem.img}" alt="${teamItem.firstLastName}" />
    </div>
    <div class="card-text">
      <h3>${teamItem.firstLastName}</h3>
      <p>${teamItem.description}</p>
    </div>
  </div>`;
  }
}

// Funzione per aggiungere nuovi membri del team, prendendoli dai dati inseriti dall'utente
function addNewMember() {
  // Creo variabile prendendo i dati del nuovo team member dal valore degli input
  const newMember = {
    img: document.getElementById("image").value,
    firstLastName: document.getElementById("name").value,
    description: document.getElementById("role").value,
  };

  //   Inserisco l'oggetto nuovo nell'array del team member
  teamMembers.push(newMember);

  //   Richiamo la funzione per inserire nel DOM tutti i miei team members
  getTeamMember(teamMembers, teamContainer);
}

// Funzione per pulire i dati degli input inseriti da utente

function emptyImput(idInput) {
  document.getElementById(idInput).value = "";
}
