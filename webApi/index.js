const express = require('express')
const app= express()
const port = process.env.PORT || 3000
const autenticacao = require('./src/controller/autenticacaocontroller/autenticacaocontroller')

app.use('/autenticacao',autenticacao)

app.listen(port)

