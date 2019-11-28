require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(express.static('build'))
app.use(bodyParser.json())
app.use(cors())

morgan.token('post', postPerson = (request) => {
  return JSON.stringify(request.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post'))





  app.get('/', (request, response) => {
    response.send(`/info holds phonebook information</p>`)
  })

  app.get('/api/info', (request, response) => {
    Person.find({}).then(persons => {
      response.send(
        `<p>Phonebook has info for ${persons.length} people.</p>`+ 
        `<p>${Date()}</p>` )
    })
    .catch(error => next(error)) 
  })
  
  app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
      response.json(persons.map(person => person.toJSON()))
    })
    .catch(error => next(error))
  })

  app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
    .then(person => {
      if(person) {
        response.json(person.toJSON())
      }
      response.status(404).end()
    })
    .catch(error =>  next(error))
  })

  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.name || !body.number) {
      return response.status(400).json({ 
        error: 'Unable to add empty person - name and number must be given.'
      })
    }
    
    Person.find({}).then(persons => {
      if (persons.find(person => person.name == body.name)) {
        return response.status(400).json({
          error: `Data of ${body.name} already exists in database.`
        })
      }
    })

    const person = new Person({
      name: body.name,
      number: body.number,
    })

    person.save().then(savedPerson => {
      response.json(savedPerson.toJSON())
    })
    .catch(error => next(error))
  })

  app.put('/api/persons/:id', (request, response) => {
    const body = request.body

    const person = {
      number: body.number
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true})
    .then(updatedPerson => {
      response.json(updatedPerson.toJSON())
    })
    .catch(error => next(error))
  })

  app.delete('/api/persons/:id', (request, response) => {
    Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
  })


  const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    if (error.name === 'CastError' && error.kind == 'ObjectId') {
      return response.status(400).send({ error: 'malformatted id'})
    }
    next(error)
  }

  app.use(errorHandler)
  
  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })