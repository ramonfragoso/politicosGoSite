import React from 'react';
import {PageHeader, Row, Carousel, Grid, Col} from 'react-bootstrap';
import politicosgologo from '../../assets/politicosgologo.png';
import {Link} from 'react-router-dom';
import './dadosGerados.css'


class DadosGerados extends React.Component {

  handleClick = (e) => {
    alert("Lllll");
    this.refs.hello.scrollIntoView();
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
              <i class="fas fa-arrow-down setinha" onClick={this.handleClick}></i>
              </Row>
              <div ref="hello">
                <p/>
                <p/>
                <p/>
                <p/>
                <p/>
                <p/>
                <p/>
                <p/>
                oifjdsaioghruaioghrwaio
              </div>
            </PageHeader>
        </Row>
      </Grid>

    );
  }

}

export default DadosGerados;
