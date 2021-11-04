// Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
// Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.

// 1. Creo un array di oggetti con i membri del team in mio possesso. Ogni oggetto avrà tre chiavi: immagine, nome e didascalia

const teamMembers = [
  // Member 1
  {
    img: "../img/wayne-barnett-founder-ceo.jpg",
    firstLastName: "Wayne Barnett",
    description: "Founder & CEO",
  },
  //   Member 2
  {
    img: "../img/angela-caroll-chief-editor.jpg",
    firstLastName: "Angela Caroll",
    description: "Chief Editor",
  },
  //   Member 3
  {
    img: "../img/walter-gordon-office-manager.jpg",
    firstLastName: "Walter Gordon",
    description: "Office Manager",
  },
  //   Member 4
  {
    img: "../img/angela-lopez-social-media-manager.jpg",
    firstLastName: "Angela Lopez",
    description: "Social media manager",
  },
  //   Member 5
  {
    img: "../img/scott-estrada-developer.jpg",
    firstLastName: "Scott Estrada",
    description: "Developer",
  },
  //   Member 6
  {
    img: "../img/barbara-ramos-graphic-designer.jpg",
    firstLastName: "Barbara Ramos",
    description: "Graphic Designer",
  },
];

// // Vedere tutti gli oggetti dell'array
// for (let i = 0; i < teamMembers.length; i++) {
//   console.log(teamMembers[i].img);
//   console.log(teamMembers[i].firstLastName);
//   console.log(teamMembers[i].description);
// }
