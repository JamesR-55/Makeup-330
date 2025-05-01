// src/Card.js
import React, { useState } from 'react';
import { Card, Row, Col, Button, Modal } from 'react-bootstrap';

function CardComponent() {
  // State to control modal visibility for each card
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  // Functions to handle opening and closing modals for each card
  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);

  const handleShowModal2 = () => setShowModal2(true);
  const handleCloseModal2 = () => setShowModal2(false);

  const handleShowModal3 = () => setShowModal3(true);
  const handleCloseModal3 = () => setShowModal3(false);


  return (
    <>
      <Row className="g-4">
        {/* Card 1 */}
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw" />
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>
                This is a Dog.
              </Card.Text>
              <Button variant="primary" onClick={handleShowModal1}>
                Open Modal 1
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://s.abcnews.com/images/Lifestyle/AP_micro_pigs_1_sr_140319_14x11_1600.jpg?w=1600" />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
                This is a Pig.
              </Card.Text>
              <Button variant="primary" onClick={handleShowModal2}>
                Open Modal 2
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw1467c453/T9014S_03.png?sw=650&sh=650&sm=fit&sfrm=png" />
            <Card.Body>
              <Card.Title>Golf Ball</Card.Title>
              <Card.Text>
                This is Golf Ball.
              </Card.Text>
              <Button variant="primary" onClick={handleShowModal3}>
                Open Modal 3
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for Card 1 */}
      <Modal show={showModal1} onHide={handleCloseModal1}>
        <Modal.Header closeButton>
          <Modal.Title>Cute Dog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is a cute dog!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal1}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal1}>
            Close but Blue
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Card 2 */}
      <Modal show={showModal2} onHide={handleCloseModal2}>
        <Modal.Header closeButton>
          <Modal.Title>Cute Piggies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>These are cute pigs! </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal2}>
          Close but Blue
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Card 3 */}
      <Modal show={showModal3} onHide={handleCloseModal3}>
        <Modal.Header closeButton>
          <Modal.Title>Golf Ball</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is a water magnet! </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal3}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal3}>
          Hit to find water!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardComponent;
