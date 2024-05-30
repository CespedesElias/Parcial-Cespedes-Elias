import express from 'express'
import RouterNumeros from './router/numeros.js'
import config from './config.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/numeros', new RouterNumeros().start())
app.use(express.static('public')) 

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor ApiRestFul escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
