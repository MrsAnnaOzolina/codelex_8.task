fetch('https://rickandmortyapi.com/api/character')
  .then((response) => response.json())
  .then((data) => console.log(data));

// type Charactertypes = {
//     id:number
//     name: string,
//     status: string,
//     species: string; 
//     types:string,
//   }

// let character:Charactertypes[] = [];

// let fetchData = {
//     method: 'POST',
//     body: JSON.stringify(character),
//     headers: new Headers({
//       'Content-Type': 'application/json; charset=UTF-8'
//     })
//   }
interface Values {
    name:string,
    status:string,
    location: string, 
}
loadCards(0,6);
function loadCards (a:number, b:number){
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    
    .then((character) => {
        let data1:string= "";
        
      for (let i=a; i<b; i++){
      let episodeName = character.results[i].episode[0].substr(32).replace("/", " ");
        let status =character.results[i].status
        
            if (status === 'Alive'){
                data1+=`<div class="card">
                <div class="card__picture">
                <img src="${character.results[i].image}">
            </div>
            <div class="card__text">
                <h1 class="card--name">${character.results[i].name}</h1>
                <span class="card--status"><span  class="circle" ></span>${status} - ${character.results[i].species}</span>
                <p class="card--text1">Last known location:</p>
                <p class="card--text2">${character.results[i].location.name}</p>
                <p class="card--text1">First seen in:</p>
                <p class="card--text2">${character.results[i].origin.name} <br> ${episodeName}  </p>
            </div>
        </div>`;
            document.querySelector('.cards').innerHTML= data1;
    } else  if (status === 'Dead'){
        data1+=`<div class="card">
        <div class="card__picture">
        <img src="${character.results[i].image}">
    </div>
    <div class="card__text">
        <h1 class="card--name">${character.results[i].name}</h1>
        <span class="card--status"><span  class="circles" ></span>${status} - ${character.results[i].species}</span>
        <p class="card--text1">Last known location:</p>
        <p class="card--text2">${character.results[i].location.name}</p>
        <p class="card--text1">First seen in:</p>
        <p class="card--text2">${character.results[i].origin.name} <br> ${episodeName}</p>
    </div>
    </div>`;
    }else {
        data1+=`<div class="card">
        <div class="card__picture">
        <img src="${character.results[i].image}">
    </div>
    <div class="card__text">
        <h1 class="card--name">${character.results[i].name}</h1>
        <span class="card--status">${character.results[i].status} - ${character.results[i].species}</span>
        <p class="card--text1">Last known location:</p>
        <p class="card--text2">${character.results[i].location.name}</p>
        <p class="card--text1">First seen in:</p>
        <p class="card--text2">${character.results[i].origin.name} <br> ${episodeName} </p>
    </div>
    </div>`;
    document.querySelector('.cards').innerHTML= data1;
    }
    

 
      }
    })

.catch((error)=>{
    console.log(error)
})
}

const loadButton = document.querySelector<HTMLButtonElement | null>(".button--button");
const loadButtonDiv =document.querySelectorAll<HTMLDivElement>(".button");

loadButton?.addEventListener("click", ()=>{
    loadButton.style.display= 'none';
    loadCards(0,20);
})
           