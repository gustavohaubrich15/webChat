import React, { PureComponent, Fragment } from 'react';
import {CaixaContato} from '../index'
import { ReactSVG } from 'react-svg'
import envio from '../../images/Mask.svg'
import './style.css'

export class Chat extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            pessoaConversa:{online:false,foto:''},
            sinal:'sinal-red'
        }
    }

    componentDidUpdate=()=>{
        this.state.pessoaConversa.online?this.setState({sinal:'sinal-green'}):this.setState({sinal:'sinal-red'})
    }

    render() {
        return (
            <Fragment>
                <div className='chat'>
                    <div className='conversa'>
                        <div className='pessoaInfo'>
                            <div className="info">
                                <div className='foto'></div>
                                <div className='infoDescricao'>
                                    <div className='nome'>Gustavo</div>
                                    <div className='status'>
                                        <div className={this.state.sinal}></div>
                                        <div className='statusDescricao'>
                                            {this.state.pessoaConversa.online?'Online':'Offline'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='papo'>
                            <div className='enviado'>
                                <div className='conteudo'>TesteB com mais teexto para testarrrrrr hbsajhsabj</div>
                            </div>
                            <div className='recebido'>
                                <div className='conteudo'>oi</div>
                            </div>
                            
                        </div>
                        <div className='envioMensagem'>
                            <input  className='caixa' placeholder='Digite aqui...' type='text'></input>
                            <div className='botaoEnviar'>
                                <ReactSVG src={envio} className='envio' />
                            </div>
                        </div>

                    </div>
                    <div className='usuariosDisponiveis'>
                        <div>Contatos</div>
                        <div classname='listaUsuarios'>
                            <CaixaContato nome='martin'/>
                            <CaixaContato nome='jose'/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
