import React from 'react';
import {Grid} from 'react-bootstrap';
import './dadosGerados.css'

export default class CardRanking extends React.Component {

	render() {
		return (
			<Grid className="rankingBox">
			{this.props.posicao === 0 ? <div className="primeiro"><i class="fas fa-trophy"></i> {this.props.cidade} - {this.props.qtd} obras</div> : 
			 this.props.posicao === 1 ? <div className="segundo"><i class="fas fa-trophy"></i> {this.props.cidade} - {this.props.qtd} obras</div> :  
			 this.props.posicao === 2 ? <div className="terceiro"><i class="fas fa-trophy"></i> {this.props.cidade} - {this.props.qtd} obras</div> :  <div>{this.props.cidade} - {this.props.qtd} obras</div>}
			</Grid>
		)
	}
}