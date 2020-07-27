import React, { Component, Fragment } from 'react';
import './style.css'

 export class Button extends Component{


  render(){
    return(
      <Fragment>
          <div className='botao'>{this.props.nome}</div>
      </Fragment>
    )
  }
}
