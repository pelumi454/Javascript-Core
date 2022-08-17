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

