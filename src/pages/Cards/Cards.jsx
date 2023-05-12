// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Button, Card, Col, } from 'react-bootstrap';
import './Cards.css';
import { Link } from 'react-router-dom';




// eslint-disable-next-line react/prop-types
const Cards = ({chef}) => {
  // eslint-disable-next-line react/prop-types
  const {name, yearOfExperience, recipe, likes, id, image} = chef;
  // console.log(chef);
  


    return (
        <div className='mb-3'>
            
            <Col>
            <Card className='container' style={{ width: '20rem', height:'28rem' }}>
      <Card.Img className='mt-4 chef-img' style={{height:'200px'}} variant="top" src={image} />
      <Card.Body className='mt-5'>
        <Card.Title>{name}</Card.Title>
        <Card.Text className='text-container'>
          <ul>
            <li>Experience:{yearOfExperience} years</li>
            <li>Recipe: {recipe}</li>
            <li>Likes: {likes}</li>
          </ul>
        </Card.Text>
        
        <Link to={`/recipe/${id}`}><Button variant="info" className='Recipe-Btn' >View Recipe</Button></Link>
        
        
      </Card.Body>
    </Card>
    
            </Col>
            
            

            
        </div>
        
    );
};

export default Cards;