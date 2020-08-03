const Connections = require('../../database/connection/connection')
const bcrypt = require('bcrypt')


class CadastroNovoUsuario {


    cadastrar = async (username, senha) => {
        let conec = new Connections()
        const text = 'INSERT INTO usuario(username,senha) VALUES($1,$2)'
        let senhaDb = await this.senhaBcrypt(senha)
        const values = [`${username}`,`${senhaDb}`]
        await conec.con.connect()
        const result = await conec.con.query(text, values)
        await conec.con.end()
    }

    senhaBcrypt=async(senha)=>{
        const quantidadeAdicionalCaracteres = 10
        const hash= await bcrypt.hash(senha,quantidadeAdicionalCaracteres)
        return hash
    }
}

module.exports = CadastroNovoUsuario