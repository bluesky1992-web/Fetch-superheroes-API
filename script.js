

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'be64dd71e7mshad918fedcd64152p1f3358jsn93f64f53bc43',
    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
  }
};

const root = document.querySelector('#root');
let superHeroes = '';

fetch('https://superhero-search.p.rapidapi.com/api/heroes', options)
  .then(response => response.json())
  .then((data) => {
    let heroes = data;
    heroes.map((hero) => {
      superHeroes += `

   
			<div class='cardContainer'>
				<img src='${hero.images.sm}' />
				<h1>${hero.name}</h1>
			</div>
   
   `

    });

    root.innerHTML = `
      <div class='cardRow'>
        ${superHeroes}
      </div>
    `;
  })
  .catch((err) => console.error(err));
