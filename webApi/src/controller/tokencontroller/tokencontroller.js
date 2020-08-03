const jwt = require('jsonwebtoken')

export class TokenController {

    verificarAutenticacaoToken = (req, res) => {
        const token = req.header('auth-token')
        if (!token) return res.status(401).send('Acesso Negado')

        try {
            const verfied = jwt.verify(token, 'hjhasuaidkadhaanda')
            req.username = verified

        } catch (err) {
            res.status(400).send('Token Inválido')
        }
    }


}