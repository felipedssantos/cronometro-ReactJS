import React, {Component} from 'react';

// Components
import AreaBotao from './components/AreaBotoes'

// Estilos
import './style.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      numero: 0,
      botao: 'INICIAR'
    }

    this.timer = null

    this.iniciar = this
      .iniciar
      .bind(this)

    this.zerar = this
      .zerar
      .bind(this)
  }

  iniciar() {
    let state = this.state

    if (this.timer !== null) {
      state.botao = 'INICIAR'
      clearInterval(this.timer)
      this.timer = null

    } else {
      state.botao = 'PARAR'
      this.timer = setInterval(() => {

        state.numero += 0.1

        this.setState(state)
      }, 100)
    }

    this.setState(state)
  }

  zerar() {

    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
    }

    let state = this.state
    state.numero = 0
    state.botao = 'INICIAR'

    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/cronometro.png')} className="img"/>
        <a className="timer">{this
            .state
            .numero
            .toFixed(1)}</a>
        <AreaBotao iniciar={this.iniciar} zerar={this.zerar} botao={this.state.botao} />
      </div>
    )
  }
}

export default App;