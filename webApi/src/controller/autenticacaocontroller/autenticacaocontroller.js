const UsuarioValidator = require('../../validator/usuariovalidator/usuariovalidator')
const CadastroNovoUsuario= require('../../service/usuarioservice/cadastronovousuario')
const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

router.route('/login').post((req, res) => {
  const { username, senha } = req.body
  if (username === '' || senha === '') {
    return res.status(400).json({
      mensagem: 'Usuario/Senha Inválidos',
      sucesso: false
    })
  }
  let usuarioValidator = new UsuarioValidator()
  usuarioValidator.verificarSeUsernameESenhaSaoValidos(username,senha)
  jwt.sign({username},'hjhasuaidkadhaanda',{algorithm:'HS256'}, function(err,token){
     res.header('auth-token',token).send(token)
  })
})

router.route('/cadastrar').post(async (req, res) => {
  const { username, senha } = req.body
  if (username === '' || senha === '') {
    return res.status(400).json({
      mensagem: 'Usuario/Senha Inválidos',
      sucesso: false
    })
  }
  let usuarioValidator = new UsuarioValidator()
  let numeroRegistros = await usuarioValidator.verificarSeExisteUsuarioCadastrado(username)
  if (numeroRegistros > 0) {
    return res.status(404).json({ mensagem: 'usuário já cadastrado', sucesso: false })
  } else {
    let cadastrado = new CadastroNovoUsuario()
    await cadastrado.cadastrar(username,senha)
    return res.status(200).json({ mensagem: 'Cadastro efetuado com sucesso', sucesso: true })
  }

})



module.exports = router