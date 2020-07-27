import React, { Component, Fragment } from 'react';
import './style.css'

 export class CaixaContato extends Component{


  render(){
    return(
      <Fragment>
          <div className='caixaContato'>
              <div className='fotoCaixa'>
                
              </div>
              <div className='nome'>
                {this.props.nome}
              </div>
          </div>
      </Fragment>
    )
  }
}
