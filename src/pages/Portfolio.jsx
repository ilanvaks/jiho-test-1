import { Container, Row, Col } from "react-bootstrap"
import Gallery from "../layout/Gallery"
import Layout from "../layout/AppLayout"

export default function Portfoloio () {

  return (
    <Layout>
      <Container id="gallery">
        <Row>
          <Col className="text-center">
      <h2>Portfolio</h2>
        </Col>
        </Row>
        
        <Row>
        <Col md={7}>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt consequuntur fugit quibusdam sit labore esse consectetur assumenda provident molestiae ipsum blanditiis vel, et, natus minima excepturi odit! Vero, neque quasi?</p>
      </Col>
      </Row>
      </Container>
      <Gallery />
    </Layout>
  )
}