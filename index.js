// required packages
const express = require('express')
const layout = require('express-ejs-layouts')
const fs = require('fs')

// express app config
const app = express()
const PORT = 3001
app.set('view engine', 'ejs')
app.use(layout)

// get the dinos from the db
const readDinoFile = () => {
    // use the filesystem to read the dino json
    const dinosaurs = fs.readFileSync('./dinosaurs.json')
    // parse the file into json data
    const dinoData = JSON.parse(dinosaurs)
    return dinoData
}

// route definitions
app.get('/', (req, res) => {
    res.send('welcome to the dino CRUD app 🦖')
})

// GET /dinosaurs -- show all dinos
app.get('/dinosaurs', (req, res) => {
    const dinoData = readDinoFile()
    // send the dino info to the client
    // TODO: add ejs view
    res.json(dinoData)
})

// GET /dinosaurs/new -- display a form to create a new dino
app.get('/dinosaurs/new', (req, res) => {
    res.send('show a form to create a new dino')
})

// POST /dinosaurs -- create a new dino in the DB
app.post('/dinosaurs', (req, res) => {
    // read the dino file
    const dinoData = readDinoFile()
    // payload of data from the request body (req.body)
    // push the data payload into the array of dinos
    console.log(req.body)
    // save the dino file
    // on POST routes -- DO NOT RENDER A TEMPLATE (this can broken)
    // redirect to where you can find a template
})

// GET /dinosaurs/:id -- display the details of one specific dino
app.get('/dinosaurs/:id', (req, res) => {
    // get the dinos from the file
    const dinoData = readDinoFile()
    // look up array index from the url route params
    const dino = dinoData[req.params.id]
    // send back a single dino
    res.json(dino)
})

// listen on a port
app.listen(PORT, () => console.log(`is that dinos i hear on port ${PORT} 🦕`))