console.log('Hola mundo desde el servidor pero lo enviamos al front')
const botonAlta = document.getElementById('alta')

botonAlta.addEventListener('click', async ()=> {
    let resultado = await traedatos()
    
    console.log(resultado)
})

async function traedatos () {
    let resultado = await getTipo('alta')
    return resultado
}
async function getTipo (data) {
    let resultado = await fetch(`http://localhost:3000/producto/${data}`)
    let result = await resultado.json()
    
    return result
}

