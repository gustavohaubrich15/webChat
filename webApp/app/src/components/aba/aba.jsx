import React, { Component, Fragment } from 'react';
import './style.css'

 export class Aba extends Component{

    selecionar=()=>{
        this.props.selecionar(this.props.nome)
    }

  render(){
    return(
      <Fragment>
          <div className='aba' >
          <div className='abaNome'onClick={this.selecionar}> {this.props.nome}</div>
              {this.props.ativo && <div className='abaDireita'>
                  <div className='sombreado'></div>
              </div>}
          </div>
      </Fragment>
    )
  }
}
