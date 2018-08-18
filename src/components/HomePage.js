import React from 'react';
import {PageHeader, Row, Carousel, Grid, Col} from 'react-bootstrap';
import politicosgologo from '../assets/politicosgologo.png';
import print1 from '../assets/screenshots/print1.jpeg';
import print2 from '../assets/screenshots/print2.jpeg';
import print3 from '../assets/screenshots/print3.jpeg';
import './HomePage.css';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {

  render() {
    return (
      <Grid className="grid">
        <Row>
            <PageHeader className="header">
              <Row className="hvr-grow">
                <Link to="/">
                <img className="logo animated fadeInDown" src={politicosgologo} alt='Politicos'/>
                </Link>
              </Row>
              <Row className="subtitle"><small className="subtitleText animated fadeIn">Saiba qual o estado das obras publicas de sua cidade. Conheca os principais responsaveis e avalie-os de forma divertida.</small></Row>
            </PageHeader>
        </Row>
        <Row>
        <Carousel className="carousel">
            <Carousel.Item>
                <img width={200} height={200} alt="900x500" src={print1} onClick={this.handleFirst}/>
                <div className="printDescription">
                    VÁ À LOCAIS DE OBRAS DO GOVERNO E DESBRAVE SUA CIDADE.
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img width={200} height={200} alt="900x500" src={print2} />
                <div className="printDescription">
                SAIBA QUAIS OS POLÍTICOS RESPONSÁVEIS PELAS OBRAS E OS CAPTURE.
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img width={200} height={200} alt="900x500" src={print3} />
                <div className="printDescription">AVALIE AS OBRAS DESCOBERTAS E CONTRIBUA COM A SOCIEDADE DE FORMA PARTICIPATIVA.</div>
            </Carousel.Item>
        </Carousel>
        </Row>
            <Row className="downloadRow">
              <Grid>
                  <Col md={6}>
                    <a href={politicosgologo} download>
                      <i class="fas fa-download baixar animated infinite wobble delay-2s"></i>
                      <div className="downloadtext">Download .apk</div>
                    </a>
                  </Col>
                  <Col md={6} className="hvr-float">
                    <Link to="/dados">
                      <i class="fas fa-map-marked-alt baixar"></i>
                      <div className="dadosText">Dados gerados</div>
                    </Link>
                  </Col>
              </Grid>
            </Row>

      </Grid>

    );
  }

}

export default HomePage;
