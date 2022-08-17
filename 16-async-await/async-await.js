// async await
async function getData() {
  const res = await axios.get("https://swapi.co/api/planets/");
  console.log(res.data);
}

//to catch the error
getData().catch((err) => {
  console.log("error");
  console.log(err);
});

//  or try and catch block
async function getData() {
  try {
    const res = await axios.get("https://swapi.co/api/planets/");
    console.log(res.data);
  } catch (err) {
      console.log("error", err);
  }
}
getData();

//  parallel and sequential execution

// sequential
async function get3PokemonSequential() {
	const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
	console.log(poke1.data);
	console.log(poke2.data);
	console.log(poke3.data);
}

// parallel 
async function get3Pokemon() {
	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
	const poke1 = await prom1;
	const poke2 = await prom2;
	const poke3 = await prom3;
	console.log(poke1.data);
	console.log(poke2.data);
	console.log(poke3.data);
}

get3Pokemon();

// better demonstration of the difference...

function changeBodyColor(color, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		}, delay);
	});
}

// sequence
async function lightShow() {
	await changeBodyColor('teal', 1000);
	await changeBodyColor('pink', 1000);
	await changeBodyColor('indigo', 1000);
	await changeBodyColor('violet', 1000);
}
// parallel
// Everything is "sent off" at the same time
// async function lightShow() {
// 	const p1 = changeBodyColor('teal', 1000);
// 	const p2 = changeBodyColor('pink', 1000);
// 	const p3 = changeBodyColor('indigo', 1000);
// 	const p4 = changeBodyColor('violet', 1000);
// 	await p1;
// 	await p2;
// 	await p3;
// 	await p4;
// }

lightShow();


