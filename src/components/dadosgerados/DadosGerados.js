import React from 'react';
import {PageHeader, Row, Grid} from 'react-bootstrap';
import politicosgologo from '../../assets/politicosgologo.png';
import {Link} from 'react-router-dom';
import './dadosGerados.css'
import ObrasCidades from  './ObrasCidades';

class DadosGerados extends React.Component {


  render() {
    return (
      <Grid className="obrasCidades">
        <Row>
            <PageHeader className="header">
              <div ref="dados">
                <ObrasCidades/>
              </div>
            </PageHeader>
        </Row>
      </Grid>

    );
  }

}

export default DadosGerados;
