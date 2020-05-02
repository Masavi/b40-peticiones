const axios = require('axios');
const peticiones = require('./peticiones');

const respuesta = peticiones.PeticionMaui(axios);
respuesta.then(res => console.log(res.data));

const respuesta2 = peticiones.PeticionSilvia(axios);
respuesta2.then(res=>{
    console.log('Los casos Globales de COVID')
    console.log(res.data.Global)
});