const express = require('express')
const app = express()

// GET
//exemplo.com.br/lembretes
app.get('/lembretes', (req, res)=> {

})

//POST
//exemplo.com.br/lembretes
app.post('/lembretes', (req, res)=> {

})

app.listen(4000, () => {
    console.log('Lembretes. Porta 4000.')
})

