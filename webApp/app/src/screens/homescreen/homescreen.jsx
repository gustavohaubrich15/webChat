import React, { PureComponent, Fragment } from 'react';
import {Button,Loading,Aba,Chat} from '../../components/index'
import './style.css';
import { ReactSVG } from 'react-svg'
import origami from '../../images/origami.svg'

export class HomeScreen extends PureComponent {

  constructor(props){
    super(props)
    this.state={
        nome:'Gustavo Haubrich',
        abas:[{nome:'Home',ativo:true},{nome:'Chat',ativo:false},{nome:'Notificações',ativo:false},
        {nome:'Calendário',ativo:false}]
    }
  }


  selecionar=(abaNome)=>{
      let copiaAba=[...this.state.abas]
      copiaAba.forEach((aba)=>{
        aba.nome===abaNome?aba.ativo=true:aba.ativo=false
      })
      this.setState({abas:copiaAba})
      this.mostrarAbas()
  }
  mostrarAbas=()=>{
    return this.state.abas.map((aba, key) => {

        return <Aba key={key} nome={aba.nome} ativo={aba.ativo} selecionar={this.selecionar}/>
    })
  }
  mostrarSelecao=()=>{
    return <Chat />

  }

  render() {
    return (
      <Fragment>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
        <div className="home">
            <div className="esquerda">
              {this.mostrarSelecao()}
            </div>
            <div className="informacao">
                <div className="fotoPerfil"></div>
                <div className="nomePerfil">{this.state.nome}</div>
                {this.mostrarAbas()}
            </div>
        </div>
      </Fragment>
    )
  }
}
