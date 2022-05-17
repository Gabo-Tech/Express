const express = require('express');
const app = express();

const port = 3000
// Ruta: Raíz del sitio (‘/’) ,Metodo: get, Acción: Mostrar un mensaje de bienvenida
app.get('/', (req, res) => {
  res.send('Welcome to my server')
})

// Ruta: Productos, Método: get, Acción: Mostrar un mensaje que diga: listado de productos
app.get('/Productos', (req, res) => {
    res.send('listado de productos')
  })
// Ruta: Productos, Método: post, Acción: Mostrar un mensaje que diga: crear un producto
app.post('/Productos', (req, res) => {
    res.send('crear un producto')
  })
// Ruta: Productos, Método: put, Acción: Mostrar un mensaje que diga: actualizar un producto
app.put('/Productos', (req, res) => {
    res.send('actualizar un producto')
  })
// Ruta: Productos, Método: delete, Acción: Mostrar un mensaje que diga: borrar un producto
app.delete('/Productos', (req, res) => {
    res.send('borrar un producto')
  })
// Ruta: Usuarios, Metodo: get, Acción: Mostrar un mensaje que diga: listado de usuarios
app.get('/Usuarios', (req, res) => {
    res.send('listado de usuarios')
  })
// Ruta: Usuarios, Método: post, Acción: Mostrar un mensaje que diga: crear un usuario
app.post('/Usuarios', (req, res) => {
    res.send('crear un usuario')
  })
// Ruta: Usuarios, Metodo: put, Acción: Mostrar un mensaje que diga: actualizar un usuario
app.put('/Usuarios', (req, res) => {
    res.send('actualizar un usuario')
  })
// Ruta: Usuarios, Metodo: delete, Acción: Mostrar un mensaje que diga: borrar un usuario
app.delete('/Usuarios', (req, res) => {
    res.send('borrar un usuario')
  })
// Utilizar Postman para probar todos los llamados


app.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`);
})