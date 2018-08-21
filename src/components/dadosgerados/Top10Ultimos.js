import React from 'react';
import {Grid, PageHeader, Row} from 'react-bootstrap';



export default class Top10Ultimos extends React.Component {


  render() {
    return(
      <Grid className="obrasCidades">
        <Row>
            <PageHeader className="header">
              <div ref="dados">
                TOP 10 CIDADES COM MENOS OBRAS NA PARAIBA
              </div>
            </PageHeader>
        </Row>
      </Grid>    )
  }

}
