import React, { Component, Fragment } from 'react';
import {Button,Loading} from '../../components/index'
import './style.css';
import { ReactSVG } from 'react-svg'
import origami from '../../images/origami.svg'

export class LoginScreen extends Component {

  constructor(props){
    super(props)
    this.state={
      username:'',
      senha:'',
      loading:false,
      cadastrarUsuario:false
    }
  }

  logar=()=>{
    this.state.username!=='' && this.state.senha!==''?this.setState({loading:true}):alert("Username/Senha Inválido")
  }
  cadastrar=()=>{
    alert("Cadastro")
  }

  checkedInput = (event) => {
    event.target.parentNode.children[2].style.opacity = 0.7
  }
  handleChange=(event)=>{
    this.setState({ [event.target.name]:event.target.value})
  }
  redirecionar=()=>{
    let cadastrar = !this.state.cadastrarUsuario
    this.setState({cadastrarUsuario:cadastrar})
  }

  render() {
    return (
      <Fragment>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
        <div className="principal">
          
          <div className="esquerda">
            <ReactSVG src={origami} className="origami" />
            <div className="descricao">
              <div>Web Chat focado em conhecer novas pessoas</div>
              <div className="final">"A diferença entre passado , presente e futuro é somente uma persistente ilusão"</div>
            </div>
          </div>
          <form>
          <div className="informacao">
            <div className="titulo">BirdTalk</div>
            <div className="frase">Bem vindo ao BirdTalk</div>
            <div className="dados" onFocus={this.checkedInput}>
              <div>Username</div>
              <input type="text" name="username" autoComplete="off" required onChange={this.handleChange}></input>
              <div className="linha"></div>
            </div>
            <div className="dados" onFocus={this.checkedInput}>
              <div>Senha</div>
              <input type="password" name="senha" required onChange={this.handleChange}></input>
              <div className="linha"></div>
            </div>
            
            {!this.state.cadastrarUsuario && <div className="cadastro">
              <div onClick={this.logar}>
              <Button nome={"Sign in"}/>
              </div>
              <div className="novoCadastro"> Novo por Aqui? 
                <div className="criarConta" onClick={this.redirecionar}> Crie uma Conta</div>
              </div>
            </div>}
            
            {this.state.cadastrarUsuario && <div className="cadastro">
              <div onClick={this.cadastrar}>
              <Button nome={"Sign up"}/>
              </div>
              <div className="novoCadastro"> Já é de casa? 
                <div className="criarConta" onClick={this.redirecionar}> Loggar na Conta</div>
              </div>
            </div>}
          </div>
          </form>
          {this.state.loading && <Loading/>}
        </div>
      </Fragment>
    )
  }
}
