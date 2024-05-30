import ModelFactory from '../model/DAOs/numerosFactory.js'
import config from '../config.js'

class Servicio {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    guardarNumero = async numero => {
        const numeroGuardado = await this.model.guardarNumero(numero)
        return numeroGuardado
    }

    obtenerNumeros = async () => {
        const numeros = await this.model.obtenerNumeros()
        return numeros
    }

    obtenerPromedio = async () => {
        const promedio = await this.model.obtenerPromedio()
        return promedio
    }

    obtenerMinMax = async () => {
        const minmax = await this.model.obtenerMinMax()
        return minmax
    }

    obtenerCantidad = async () => {
        const cantidad = await this.model.obtenerCantidad()
        return cantidad
    }
}

export default Servicio