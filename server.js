console.log('Hier komt je server voor Sprint 10.')

console.log('Gebruik uit Sprint 9 alleen de code die je mee wilt nemen.')

console.log('Zet \'m op!')


import express from 'express'
import { Liquid } from 'liquidjs';

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express());
app.set('views', './views')


// Routes
app.get('/', async function (request, response) {
  const stekjesResponse = await fetch('https://fdnd-agency.directus.app/items/bib_stekjes/?fields=id,naam,foto')
  const messagesResponse = await fetch('https://fdnd-agency.directus.app/items/bib_messages/?fields=for,from')

  // const stekjesResponse = await fetch('https://fdnd-agency.directus.app/items/bib_stekjes/?fields=id,naam,foto&filter={"id":"13"}')

  const stekjesResponseJSON = await stekjesResponse.json()
  const messagesReponseJSON = await messagesResponse.json()

  const stekjesData = stekjesResponseJSON.data
  const messagesData = messagesReponseJSON.data

  // Loop door alle stekjes in de stekjes array heen
  for(const stekje of stekjesData) {
    // Zoek naar een message uit de messages array met de juiste stekjes-id
    const message = messagesData.find((msg) => msg.for === `Stekje ${stekje.id}`)
    
    if(message) {
      // Als de message bestaat, stel de likes voor het stekje in
      stekje.likes = parseInt(message.from)
    } else {
      // Anders, stel de likes op 0 in
      stekje.likes = 0
    }
  }
  response.render('stekjes.liquid', { stekjes: stekjesData })
})

app.get('/stekje/:id', async function (request, response) {
  const stekje = request.params.id

  const stekjeResponse = await fetch(`https://fdnd-agency.directus.app/items/bib_stekjes/?filter={"id":"${stekje}"}`)  
  const stekjeResponseJSON = await stekjeResponse.json()  
  console.log(stekjeResponseJSON)

  response.render('stekje.liquid', {stekje: stekjeResponseJSON.data[0]})
})

app.post('/like', async function (request, response) {
  const url = `https://fdnd-agency.directus.app/items/bib_messages?filter={"for":"Stekje ${request.body.stekjeid}"}`

  const stekjesResponse = await fetch(url)
  const stekjesResponseJSON = await stekjesResponse.json()
  

  if(stekjesResponseJSON.data.length > 0) {
    const likes = parseInt(stekjesResponseJSON.data[0].from || '1');
    const newLikes = likes + 1;

    await fetch(`https://fdnd-agency.directus.app/items/bib_messages/${stekjesResponseJSON.data[0].id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        from: newLikes,
      }),
    })
  } else {  
    await fetch('https://fdnd-agency.directus.app/items/bib_messages', {
      method: 'POST',
      body: JSON.stringify({
        for: `Stekje ${request.body.stekjeid}`,
        from: 1
      }),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  } 

  // response.redirect(303, `/stekje/${request.body.stekjeid}`)
  response.redirect(303, `/`)

})
// MARK: Stekjes

app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
    console.log(`Daarna kun je via http://localhost:${app.get('port')}/ jouw interactieve website bekijken.\n\nThe Web is for Everyone. Maak mooie dingen 🙂`)
  })