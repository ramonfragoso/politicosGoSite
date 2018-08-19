import React from 'react';
import {PageHeader, Row, Grid} from 'react-bootstrap';
import politicosgologo from '../../assets/politicosgologo.png';
import {Link} from 'react-router-dom';
import './dadosGerados.css'
import Dados from  './Dados';

class DadosGerados extends React.Component {

  handleClick = (e) => {
    this.refs.dados.scrollIntoView({behavior:"smooth"});
  }

  render() {
    return (
      <Grid>
        <Row>
            <PageHeader className="header">
              <Row className="hvr-grow">
              <Link to="/">
                <img src={politicosgologo} alt='Politicos' className="logo animated fadeInDown"/>
                </Link>
              </Row>
              <Row className="animated fadeInUp">
              <small className="title">
              DADOS
              </small>
              </Row>
              <Row className="animated infinite rubberBand">
              <i className="fas fa-arrow-down setinha" onClick={this.handleClick}></i>
              </Row>
              <div ref="dados">
                <Dados/>
              </div>
            </PageHeader>
        </Row>
      </Grid>

    );
  }

}

export default DadosGerados;
