import React from 'react';
import './dadosGerados.css'

export default class CardRanking extends React.Component {

	render() {
		return (
			<div className="rankingBox">cidade= {this.props.cidade} qtd= {this.props.qtd}</div>
		)
	}
}