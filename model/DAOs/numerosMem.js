class ModelMem {
    #numeros = []

    constructor() {
        this.#numeros = [22,33,56]
    }

    guardarNumero = async numero => {
        const numGuardado = this.#numeros.push(numero)
        return numGuardado
    }

    obtenerNumeros = async () => {
        const numero = {numeros: this.#numeros.sort((a ,b ) => a-b)}
        return numero
    }

    obtenerPromedio = async () => {
        if (this.#numeros.length === 0) {
            return 0;
          }
          const suma = this.#numeros.reduce((acumulador, numero) => acumulador + numero, 0)
          const promedio = suma / this.#numeros.length
          return promedio
    }

    obtenerMinMax = async () => {
        if (this.#numeros.length === 0) {
            return { maximo: null, minimo: null }
          }
          let maximo = this.#numeros[0]
          let minimo = this.#numeros[0]
          this.#numeros.forEach(numero => {
            if (numero > maximo) {
              maximo = numero
            }
            if (numero < minimo) {
              minimo = numero
            }
          })
          return { minimo, maximo }
    }

    obtenerCantidad = async () => {
        const cantidad = {cantidad: this.#numeros.length} 
        return cantidad  
    }
}

export default ModelMem