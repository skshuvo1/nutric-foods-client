import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, } from 'react-bootstrap';
import './Cards.css';
import { Link, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { authContext } from '../../firebase/AuthProvider';


const Cards = ({chef}) => {
  const {name, yearOfExperience, recipe, likes, id, image} = chef;
  const {loading} = useContext(authContext)
  const navigate = useNavigate()
  console.log(loading);
  if(loading){
    
  return <div className='text-center my-48'>
     <span className="loading loading-spinner text-secondary"></span>
    </div>
     
 }
  


    return (
        <div className='mb-3'>
            
            <Col>
            <Card className='container' style={{ width: '20rem', height:'28rem' }}>
<LazyLoadImage className='mt-4 chef-img' style={{height:'200px'}} variant="top" src={image}></LazyLoadImage>
      <Card.Body className='mt-5'>
        <Card.Title>{name}</Card.Title>
        <Card.Text className='text-container'>
          <ul>
            <li>Experience:{yearOfExperience} years</li>
            <li>Recipe: {recipe}</li>
            <li>Likes: {likes}</li>
          </ul>
        </Card.Text>

        <Link to={`/recipe/${id}`}><Button  variant="info" className='Recipe-Btn' >View Recipe</Button></Link>


      </Card.Body>
    </Card>
    
            </Col>
            
            

            
        </div>
        
    );
};

export default Cards;