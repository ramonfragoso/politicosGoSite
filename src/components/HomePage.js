import React from 'react';
import {PageHeader, Row, Carousel, Grid, Col} from 'react-bootstrap';
import ObrasCidades from './dadosgerados/ObrasCidades';
import DadosGerados from './dadosgerados/DadosGerados';
import Top10Primeiros from './dadosgerados/Top10Primeiros';
import Top10Ultimos from './dadosgerados/Top10Ultimos';
import politicosgologo from '../assets/politicosgologo.png';
import print1 from '../assets/screenshots/print1.png';
import print2 from '../assets/screenshots/print2.png';
import print3 from '../assets/screenshots/print3.png';
import print4 from '../assets/screenshots/print4.png';
import print5 from '../assets/screenshots/print5.png';
import print6 from '../assets/screenshots/print6.png';
import print7 from '../assets/screenshots/print7.png';
import print8 from '../assets/screenshots/print8.png';
import print9 from '../assets/screenshots/print9.png';
import ultimo from '../assets/screenshots/ultimo.png';

import './HomePage.css';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  setaClick = (e) => {
      this.refs.obras.scrollIntoView({behavior:"smooth"});
  }

  logoClick = () => {
    document.location.reload(true)
  }


  render() {
    return (
      <div className="mainView" >
      <Grid className="grid">
        <Row>
            <PageHeader  className="header">
              <Row className="hvr-grow">
                <Link to="/">
                <img className="logo animated fadeInDown" src={politicosgologo} onClick={this.logoClick} alt='Politicos'/>
                </Link>
              </Row>
              <Row className="subtitle"><small className="subtitleText animated fadeIn">Saiba qual o estado das obras publicas de sua cidade. Conheca os principais responsaveis e avalie-os de forma divertida.</small></Row>
            </PageHeader>
        </Row>
        <Row>
        <Carousel className="carousel">
            <Carousel.Item>
                <img width={300} height={300} alt="900x500" src={print1} onClick={this.handleFirst}/>
                <div className="printDescription">
                PolíticosGo: CONSCIENTIZAÇÃO E DIVERSÃO.
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img width={300} height={300} alt="900x500" src={print2} />
                <div className="printDescription">
                VÁ À LOCAIS DE OBRAS DO GOVERNO E DESBRAVE SUA CIDADE.
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img width={300} height={300} alt="900x500" src={print3} />
                <div className="printDescription">CONHEÇA OS PRINCIPAIS RESPONSÁVEIS PELAS OBRAS.</div>
            </Carousel.Item>

            <Carousel.Item>
                <img width={300} height={300} alt="900x500" src={print6} />
                <div className="printDescription">AVALIE AS OBRAS DESCOBERTAS E CONTRIBUA COM A SOCIEDADE DE FORMA PARTICIPATIVA.</div>
            </Carousel.Item>

            <Carousel.Item>
                <img width={300} height={300} alt="900x500" src={ultimo} />
                <div className="printDescription">CAPTURE POLÍTICOS.</div>
            </Carousel.Item>

            <Carousel.Item>
                <img width={300} height={300} alt="900x500" src={print7} />
                <div className="printDescription">COLECIONE POLÍTICOS E AVALIE-OS.</div>
            </Carousel.Item>

            <Carousel.Item>
                <img width={300} height={300} alt="900x500" src={print9} />
                <div className="printDescription">COLETE ITENS E SE DIVIRTA.</div>
            </Carousel.Item>
        </Carousel>
        </Row>
        <Row className="downloadRow">
            <a href={politicosgologo} download>
              <i class="fas fa-download baixar animated infinite wobble"></i>
              <div className="downloadtext">Download .apk</div>
            </a>
        </Row>
        <Row>
        <small className="title">
        DADOS
        </small>
        <Row>
        </Row>
        <i className="fas fa-arrow-down setinha animated infinite rubberBand" onClick={this.setaClick}></i>
        </Row>
      </Grid>
          <div className="viewObras" ref="obras">
            <DadosGerados/>
          </div>
          <div className="viewPrimeiros">
            <Top10Primeiros/>
          </div>
          <div className="viewUltimos">
            <Top10Ultimos/>
          </div>
      </div>

    );
  }

}

export default HomePage;
