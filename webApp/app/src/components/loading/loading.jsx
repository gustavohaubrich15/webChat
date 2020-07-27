import React, { Component, Fragment } from 'react';
import './style.css'

 export class Loading extends Component{


  render(){
    return(
      <Fragment>
          <div className="carregamento">
              <div className="circulo"></div>
          </div>
      </Fragment>
    )
  }
}
