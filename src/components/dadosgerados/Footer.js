import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import politicosgologo from '../../assets/politicosgologo.png';
import fernando from '../../assets/fernando.png';
import './dadosGerados.css';





export default class Footer extends React.Component {

	// eu: ramonfragoso
	//felipe mota: fmota0
	// icaro: Icaro-Lima
	// javan: javanlacerda
	// leonardo: https://www.instagram.com/leonpbe/
	// diego doido: DiegoAmancio
	// jobson: lucaspk33
	// fernando: https://www.instagram.com/fernandocgd/

	render() {

		return(
	      <Grid className="footer">
		        <div className="texto">
	                Esse projeto foi desenvolvido no 4º hackfest contra a corrupção.
	            </div>
	            <div className="divImagens">
		      		<Col md={6}>
		      			<a href="http://hackfest.com.br/" target="_blank">
		      				<img className="imgZinhas" src="http://hackfest.com.br/images/logo-02.svg" alt="Hackfest" height="95"/>
		      			</a>
		      		</Col>
		      		<Col md={6}>
		                <img className="imgZinhas" src={politicosgologo} alt='Politicos' height="95"/>
		      		</Col>
	      		</div>
	      		<div className="equipeTitle">
	      			EQUIPE:
	      		</div>
	      		<div className="equipe">
	      			
	      			<Row>
	      				<Col md={3}>
		      				<a href="https://github.com/ramonfragoso" target="_blank">
		      					<img className="iconeMembro" src="https://avatars3.githubusercontent.com/u/25274323?s=400&v=4" alt="ramon" height="84"/>
		      				</a>
		      			</Col>
		      			<Col md={3}>
		      				<a href="https://github.com/fmota0" target="_blank">
		      					<img className="iconeMembro" src="https://avatars0.githubusercontent.com/u/29783962?s=400&v=4" alt="fmota0" height="84"/>						
		      				</a>
		      			</Col>
		      			
		      			<Col md={3}>
		      				<a href="https://github.com/Icaro-Lima" target="_blank">
		      					<img className="iconeMembro" src="https://avatars1.githubusercontent.com/u/27537731?s=400&v=4" alt="icaro" height="84"/>						
		      				</a>
		      			</Col>
		      			
		      			<Col md={3}>
		      				<a href="https://github.com/javanlacerda" target="_blank">
		      					<img className="iconeMembro" src="https://avatars0.githubusercontent.com/u/23180089?s=400&v=4" alt="fmota0" height="84"/>						
		      				</a>
		      			</Col>

	      			</Row>
	      			<Row>
		      			<Col md={3}>
		      				<a href="https://www.instagram.com/leonpbe" target="_blank">
		      					<img className="iconeMembro" src="https://instagram.fcpv1-1.fna.fbcdn.net/vp/51411d2ffe8aec899a2dbc01965f0d3f/5C05BAA7/t51.2885-19/s150x150/35290719_1158989787576893_1368189573334564864_n.jpg" alt="leonardo" height="84"/>						
		      				</a>
		      			</Col>
		      			
		      			<Col md={3}>
		      				<a href="https://github.com/diegoamancio" target="_blank">
		      					<img className="iconeMembro" src="https://avatars3.githubusercontent.com/u/29637912?s=400&v=4" alt="diegodoido" height="84"/>						
		      				</a>
		      			</Col>
		      			
		      			<Col md={3}>
		      				<a href="https://github.com/lucaspk" target="_blank">
		      					<img className="iconeMembro" src="https://miro.medium.com/fit/c/240/240/0*eYci0wVqubs62hHJ." alt="jobson" height="84"/>						
		      				</a>
		      			</Col>
		      			<Col md={3}>
		      				<a href="https://www.instagram.com/fernandocgd/" target="_blank">
		      					<img className="iconeMembro" src={fernando} alt="fernando" height="84"/>						
		      				</a>
		      			</Col>
	      			</Row>
	      		</div>
	      </Grid>
		)
	}
}