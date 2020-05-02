const axios = require('axios');
const peticiones = require('./peticiones');


const respuesta = peticiones.PeticionJesua(axios);
respuesta.then(res => console.log(res.data));

// const respuesta = peticiones.PeticionMaui(axios);
// respuesta.then(res => console.log(res.data));
