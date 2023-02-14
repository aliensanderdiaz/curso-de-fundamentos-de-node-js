// function soyAsincrona() {
//     console.log('Hola soy una funcion asincrona')
//     setTimeout(() => {
//         console.log('Estoy siendo asincrono')
//     }, 1000);
// }

// console.log('Iniciando Programa')
// soyAsincrona()
// console.log('Terminando Programa')

function soyAsincrona(miCallback) {
    setTimeout(() => {
        console.log('Estoy siendo asincrono')
        miCallback()
    }, 1000);
}

console.log('Iniciando Programa')
soyAsincrona(function() {
    console.log('Terminando Programa')
})