const axios = require("axios");
const peticiones = require("./peticiones");

const respuesta = peticiones.PeticionMaui(axios);
const alemanjosh7 = peticiones.PeticionJosue(axios);
respuesta.then((res) => console.log(res.data));

