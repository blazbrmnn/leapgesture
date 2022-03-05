import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Video } from '@splidejs/splide-extension-video';
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';

import { renderAttachments } from '../helpers/attachments';
import { formatText, isArray } from '../helpers/util';

import "./ContentCards.css";

/*
<Splide Extensions={{Video}} options={{
  type: 'loop',
  rewind: false,
  autoplay: true
}}>
  <SplideSlide>
    <img src="image1.jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="image2.jpg" alt="Image 2"/>
  </SplideSlide>
</Splide>
*/

function Cards (props) {
  return (
  <Container className="content-cards">
    <Row xs={1} className="g-4">
      {props.dataset.map((contentNode, idx) => (
        <Col lg={{ span: 6, offset: 3}} md={{ span: 10, offset: 1 }}>
          <Card>
            {/*(typeof contentNode.attachments === 'undefined') 
              ? '' 
              : renderAttachments(contentNode.attachments, 'facebook', 'image')
                  .map(url => (
                <Card.Img variant="top" src={url}/>
            ))*/}
            <Card.Body>
              {/*<Card.Title>Card title</Card.Title>*/}
                {(contentNode.post) ? (formatText(contentNode.post)) : ''}
                {(contentNode.comment) ? (formatText(contentNode.comment)) : ''}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export { Cards }