/* requiero express y lo guardo en una constante */
const express = require('express')
/* requiero path para usar join y dirname */
const path= require('path')
/* creo la constante app donde guardo express como una funcion */
const app=express()
/* creo la constante port que es donde le voy a dar el puerto */
const PORT = 3000;
/* uso app.use para dejar de forma estatica que va a usar la carpeta public */
app.use(express.static('public'))

/* creo las rutas */
app.get('/', (req,res)=>res.sendFile(path.join(__dirname, 'views','home.html')))
app.listen(PORT,()=>console.log(`Server running in http://localhost:${PORT}`))