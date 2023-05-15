// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, } from 'react-bootstrap';
import './Cards.css';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { LazyLoadImage } from 'react-lazy-load-image-component';






// eslint-disable-next-line react/prop-types
const Cards = ({chef}) => {
  // eslint-disable-next-line react/prop-types
  const {name, yearOfExperience, recipe, likes, id, image} = chef;
  // console.log(chef);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  },[]);
  
  


    return (
        <div className='mb-3'>
            
            <Col>
            <Card className='container' style={{ width: '20rem', height:'28rem' }}>
      {/* <Card.Img className='mt-4 chef-img' style={{height:'200px'}} variant="top" src={image} /> */}
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

        <Button variant="info" className='Recipe-Btn' >View Recipe</Button>
        {
          loading?<ClipLoader
          color= '#D0021B'
          size={50}
        />:
        <Link to={`/recipe/${id}`}><Button onClick={() => setLoading(!loading)} variant="info" className='Recipe-Btn' >View Recipe</Button></Link>
        
        }
        

        
        
        
        
        
        
      </Card.Body>
    </Card>
    
            </Col>
            
            

            
        </div>
        
    );
};

export default Cards;