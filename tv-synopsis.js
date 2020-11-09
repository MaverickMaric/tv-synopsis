const express = require('express')
const showData = require('./showdata')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('tv-synopsis', showData)
})

app.get('/season/:seasonNumber', (request, response) => {
  return response.render('show-seasons', {
    title: showData.title,
    season: showData.seasons.find(season => season.number === parseInt(request.params.seasonNumber))
  })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(6177, () => {
  console.log('Listening on 6177...') // eslint-disable-line no-console
})
