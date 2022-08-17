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
