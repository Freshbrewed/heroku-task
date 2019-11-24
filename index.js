const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

morgan.token('post', postPerson = (request) => {
  return JSON.stringify(request.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post'))


const generateId = () => {
  return Math.floor(Math.random() * Math.floor(Number.MAX_VALUE))
}

let persons = [
  { 
     name :  "Arto Hellas", 
     number :  "040-123456",
     id : 1
  },
  { 
     name: "Ada Lovelace", 
     number: "39-44-5323523",
     id : 2
  },
  { 
     name: "Dan Abramov", 
     number: "12-43-234345",
     id: 3
  },
  { 
     name: "Mary Poppendieck", 
     number: "39-23-6423122",
     id: 4
  }
]

  app.get('/', (request, response) => {
    response.send(`/info holds phonebook information</p>`)
  })

  app.get('/info', (request, response) => {
    response.send(
      `<p>Phonebook has info for ${persons.length} people.</p>`+ 
      `<p>${Date()}</p>` )
      
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => {
      return person.id === id
    })

  if (person) {
      console.log("Fronted request for", person)
    response.json(person)
  } else {
    response.status(404).end()
  }
  })

  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.name || !body.number) {
      return response.status(400).json({ 
        error: 'Unable to add empty person - name and number must be given.'
      })
    }

    //Tehtävänannossa lukee, että on estettävä lisäys, jos "lisättävä nimi on jo luettelossa".
    //Oletetaan siis, ettei samannimisiä henkilöitä voi olla montaa tämän tehtävän puitteissa.
    if (persons.find(person => person.name == body.name)) {
      return response.status(400).json({
        error: `Data of ${body.name} already exists in database.`
      })
    }

    const person = {
      name: body.name,
      number: body.number,
      id: generateId(),
    }
  
    persons = persons.concat(person)
    response.json(person)
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    console.log(persons)
    response.status(204).end()
  })
  
  const PORT = process.env.PORT ||3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })