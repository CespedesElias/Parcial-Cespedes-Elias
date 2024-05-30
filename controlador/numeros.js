import Servicio from '../servicio/numeros.js'

class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    web = async(req, res)=>{
        res.sendFile( process.cwd() + '/public/index.html')
    }

    guardarNumero = async (req,res) => {
        const numero = req.body.numero
        //const { numero } = req
        const numeroGuardado = await this.servicio.guardarNumero(numero)
        res.json(numeroGuardado)
    }

    obtenerNumeros = async (req,res) => {
        const numeros = await this.servicio.obtenerNumeros()
        res.json(numeros)
    }

    obtenerPromedio = async (req,res) => {
        const promedio = await this.servicio.obtenerPromedio()
        res.json(promedio)
    }

    obtenerMinMax = async (req,res) => {
        const minmax = await this.servicio.obtenerMinMax()
        res.json(minmax)
    }

    obtenerCantidad = async (req,res) => {
        const cantidad = await this.servicio.obtenerCantidad()
        res.json(cantidad)
    } 
}

export default Controlador