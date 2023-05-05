// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Card, Col, } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const Cards = ({chef}) => {
    // console.log(chef.image);
    return (
        <div>
            
            <Col>
            <Card style={{ width: '18rem', height:'24rem' }}>
      <Card.Img style={{height:'200px'}} variant="top" src={chef.image} />
      <Card.Body>
        <Card.Title>{chef.name}</Card.Title>
        <Card.Text>
          {chef.description}
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
            </Col>
            
            

            
        </div>
    );
};

export default Cards;