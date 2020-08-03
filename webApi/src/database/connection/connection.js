class Connection {
  constructor() {
    this.con = this.iniciarconexao()
  }
  iniciarconexao = () => {
    const pg = require('pg')
    const conString = 'postgres://tmlnbnop:D-ZIAla2WtylLQjjaJfONagLE0qHwgIH@tuffi.db.elephantsql.com:5432/tmlnbnop'
    const client = new pg.Client(conString)
    return client
  }
}

module.exports=Connection