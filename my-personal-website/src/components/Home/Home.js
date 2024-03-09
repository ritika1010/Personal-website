import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, fontFamily: "Orpheus Pro"}} className="heading">
              Ritika Deshpande{" "}
                
              </h1>

              <h1 className="heading-name" >
                <strong className="main-name"> Your Passionate Software Innovator</strong>
              </h1>


            </Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
