// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Card, Col} from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Recipe.css'
// import SingleChef from '../singleChef/SingleChef';

const Recipe = () => {

    const data = useLoaderData();
    // console.log(data);
   
    
    return (
       
        <div className='mb-3'>
            
        <Col>
        <Card >
  <div className='d-flex gap-5 p-4'>
  <div>
  <Card.Img className='mt-4 chef-img' style={{height:'400px'}} variant="top" src={data.image} />
  </div>
  <div>
  <Card.Body className='mt-5'>
    <Card.Title>{data.name}</Card.Title>
    <p>{data.description}</p>
    <Card.Text className='text-container'>
      <ul>
        <li>Experience:{data.yearOfExperience} years</li>
        <li>Recipe: {data.recipe}</li>
        <li>Likes: {data.likes}</li>
      </ul>
    </Card.Text>
    
    
  </Card.Body>
  </div>
  </div>
</Card>

        </Col>
        
        

        
    </div>

       
    );
};

export default Recipe;  