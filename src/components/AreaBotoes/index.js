import React, {Component} from 'react'

class AreaBotao extends Component {
  render() {
    return (
      <div className="areaBtn">
        <a className="botao" onClick={this.props.iniciar}>{this.props.botao}</a>
        <a className="botao" onClick={this.props.zerar}>ZERAR</a>
      </div>
    )
  }
}

export default AreaBotao