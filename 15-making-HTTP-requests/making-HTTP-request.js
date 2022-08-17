// using fetch
fetch("https://swapi.co/api/planets/")
    .then((response) => response.json())
    .then((data) => {
        for (let planet of data.results) {
            console.log(planet.name);
        }
    }).catch((error) => { 
        console.log('something went wrong');
        console.log(error);
    }); 
    // or in order to catch the error because fetch returns a response whether it is the response you want or not
    fetch("https://swapi.co/api/planetsuy21/")
      .then((response) => {
        if (!response.ok)
          throw new Error(`Status Code Error: ${response.status}`);

        response.json().then((data) => {
          for (let planet of data.results) {
            console.log(planet.name);
          }
        });
      })
      .catch((err) => {
        console.log("SOMETHING WENT WRONG WITH FETCH!");
        console.log(err);
      });
//  or to chain the fetch requests
fetch("https://swapi.co/api/planets/")
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    return response.json();
  })
  .then((data) => {
    console.log("FETCHED ALL PLANETS (first 10)");
    const filmURL = data.results[0].films[0];
    return fetch(filmURL);
  })
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    return response.json();
  })
  .then((data) => {
    console.log("FETCHED FIRST FILM, based off of first planet");
    console.log(data.title);
  })
  .catch((err) => {
    console.log("SOMETHING WENT WRONG WITH FETCH!");
    console.log(err);
  });
