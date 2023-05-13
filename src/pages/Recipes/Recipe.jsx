// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Card, Col, Row} from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Recipe.css'
import SingleChef from '../singleChef/SingleChef';
// import SingleChef from '../singleChef/SingleChef';

const Recipe = () => {

    const data = useLoaderData();
    // console.log(data);
    const singleRecipe = data.recipes;
    // console.log(singleRecipe);
   
    
    return (
       
        <div className='mb-3 '>
            
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
        
        <div className='main-container'>
        <h3 className='text-center m-4 py-4'>All Recipes Are Here</h3>
        
        <div className='container flex gap-4'>
        
        <Row xs={1} md={2} lg={3}>
          {
          singleRecipe.map(recipe => <SingleChef key={recipe.rating} recipe = {recipe} ></SingleChef>)
        }
        </Row>
        
        </div>
        </div>
        </div>

        
   

       
    );
};

export default Recipe;  