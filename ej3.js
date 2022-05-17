const express = require('express');
const app = express();

const port = 3000
// Ruta: Raíz del sitio (‘/’) ,Metodo: get, Acción: Mostrar un mensaje de bienvenida
app.get('/', (req, res) => {
  res.send('Welcome to my server')
})

const objeto = {
    description: 'Productos',
    items: [
      { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
      { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
      {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
      {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
      {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
      {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
    ]
  }
  const items = objeto.items;

app.get('/Productos', (req, res) => {
    res.send(objeto)
  })

  app.get("/ID/:id", (req, res) => {
    console.log(typeof +req.params.id);
    const found =objeto.items.some((item) => item.id === +req.params.id);
    console.log(found);
    if (found) {
      res.send(objeto.items.filter((item) => item.id === +req.params.id));
    } else {
      res.status(404).send(`Item with id ${req.params.id} not found`);
    }
  });
  app.get("/:precio", (req, res) => {
    const found =items.some((items) => items.precio === +req.params.precio);
    if (found) {
      res.send(items.filter((items) => items.precio === +req.params.precio));
    } else {
      res.status(404).send(`Item with price ${req.params.precio} not found`);
    }
  });
  app.get('/Productos/Precio', (req, res)=>{
    const results = items.filter(item =>
        item.precio >= +50 && item.precio <= +250
    );
    res.send({total: results.length, results});
});
app.get('/Productos/:nombre', (req, res) => {

    const objetos = items.filter(item=>item.nombre===req.params.nombre);

    if (objetos.length > 0) {
        res.send({ total: objetos.length, objetos });
    } else {
        res.status(404).send('No products found');
    }
});
  app.use(express.json()); 
  app.post("/", (req, res) => {
    const newItem = {
      id: objeto.items.length + 1,
      nombre: req.body.nombre,
      precio: req.body.precio,
    };
    if (!req.body.nombre || !req.body.precio) {
      res.status(400).send("Please enter all fields");
    } else {
      items.push(newItem);
      const response = { newItem, items }
      res.status(201).send(response);
    }
  });
  
  app.put('/:id',(req,res)=>{
      const found = items.some(items => items.id === +req.params.id)
      if(found){
          items.forEach(items =>{
              if(+req.params.id === items.id){
                items.nombre = req.body.nombre ? req.body.nombre : items.nombre
                items.precio = req.body.precio ? req.body.precio : items.precio
              }
          })
      }else{
          res.status(404).send(`Item with id ${req.params.id} not found`)
      }
  })
  
  app.delete('/:id',(req,res)=>{
      const found = items.some(items => items.id === +req.params.id)
  
      if(found){
          const itemsFiltered = items.filter(items => items.id !== +req.params.id)
          res.send({msg:`Item with id ${req.params.id} deleted`,itemsFiltered})
      }else{
          res.status(404).send(`Item with id ${req.params.id} not found`)
      }
  })

app.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`);
})