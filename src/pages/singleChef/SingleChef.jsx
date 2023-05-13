// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleChef.css';
import { FaHeart } from "react-icons/fa";


// eslint-disable-next-line react/prop-types
const SingleChef = ({recipe}) => {
    
    // eslint-disable-next-line react/prop-types
    const {recipeName, recipeImage,cookingMethod,ingredients, rating} = recipe;
    const elements = [...ingredients +", "];
    // const method = cookingMethod.length;
    // console.log(cookingMethod.lenght);
    // if(method > 50){
    //     method.slice(0, 50)
    // };

    const handleFavoriteBtn = () => {
        document.getElementById('button').style.color ='red';
       
    }
    return (
        <div>
            
            <Col className='mb-3'>
            <Card className='container' style={{ width: '20rem', height:'28rem' }}>
      <Card.Img className='mt-4' style={{height:'200px'}} variant="top" src={recipeImage} />
      <Card.Body>
        <Card.Title>{recipeName}</Card.Title>
        <Card.Text className='text-container'>
            <p>{cookingMethod}</p>
            
            <p><span className='ingredients'>Ingredients:</span> 
                <ul>
                    <li>
                        {elements}
                    </li>
                </ul>
            </p>
            <div className='d-flex justify-content-between'>
            <div>
            <p><span className='ingredients'>Rating: </span>{rating}</p>
            </div>
            <div>
            <FaHeart id ='button' onClick={handleFavoriteBtn}></FaHeart>
            </div>
            </div>
            
           
        </Card.Text>
      </Card.Body>
    </Card>
    
    </Col>
        </div>
    );
};

export default SingleChef;