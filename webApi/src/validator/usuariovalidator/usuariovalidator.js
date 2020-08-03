const Connections = require('../../database/connection/connection')
const bcrypt = require('bcrypt')
class UsuarioValidator {


    verificarSeExisteUsuarioCadastrado = async (username) => {
        let conec = new Connections()
        let quantidadeRegistros = 0
        const text = 'SELECT * FROM usuario WHERE username=$1'
        const values = [`${username}`]
        await conec.con.connect()
        const result = await conec.con.query(text, values)
        quantidadeRegistros = result.rowCount
        await conec.con.end()
        return quantidadeRegistros
    }

    verificarSeUsernameESenhaSaoValidos=async(username,senha)=>{
        let conec = new Connections()
        const text = 'SELECT * FROM usuario WHERE username=$1'
        const values = [`${username}`]
        await conec.con.connect()
        const result = await conec.con.query(text, values)
        await conec.con.end()
        bcrypt.compare(senha, result.senha, function(err,result){
            return result
        })
    }
}

module.exports = UsuarioValidator