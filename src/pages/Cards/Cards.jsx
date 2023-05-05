// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Card, Col, } from 'react-bootstrap';
import './Cards.css'

// eslint-disable-next-line react/prop-types
const Cards = ({chef}) => {
    // console.log(chef.image);
    return (
        <div className='mb-3'>
            
            <Col>
            <Card className='container' style={{ width: '20rem', height:'28rem' }}>
      <Card.Img className='pt-4' style={{height:'200px'}} variant="top" src={chef.image} />
      <Card.Body>
        <Card.Title>{chef.name}</Card.Title>
        <Card.Text>
          {chef.description}
        </Card.Text>
        <Button variant="info" className='details-Btn' >Details</Button>
      </Card.Body>
    </Card>
            </Col>
            
            

            
        </div>
    );
};

export default Cards;