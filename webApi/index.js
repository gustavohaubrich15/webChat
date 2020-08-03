const express = require('express')
const app= express()
const cors = require('cors')
const port = process.env.PORT || 3000
const autenticacao = require('./src/controller/autenticacaocontroller/autenticacaocontroller')

app.use(cors())
app.use(express.json())
app.use('/autenticacao',autenticacao)

app.listen(port)

