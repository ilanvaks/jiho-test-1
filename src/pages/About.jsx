import { Container,Row, Col } from "react-bootstrap";
import Layout from "../layout/AppLayout";

export default function About () {
  return (
    <Layout>
      <Container id="about">
        <Row>
          <Col>
      <h2>About</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusamus magni soluta modi exercitationem voluptatibus. Temporibus ullam reiciendis doloribus? Explicabo, expedita. Harum possimus at voluptatum accusamus nostrum assumenda sint ipsum.
      </Col>
      </Row>
      </Container>
    </Layout>
  )
}