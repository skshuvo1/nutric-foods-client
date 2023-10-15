// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleChef.css';
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import Rating from 'react-rating';


const SingleChef = ({ recipe }) => {

    const [isClicked, setIsClicked] = useState(false)
    const { recipeName, recipeImage, cookingMethod, ingredients, rating } = recipe;
    const elements = [...ingredients + ", "];



    return (
        <div>

            <Col className='mb-3'>
                <Card className='container-fluid ' style={{ width: '20rem', height: '28rem' }}>
                    <Card.Img className='mt-4' style={{ height: '200px' }} variant="top" src={recipeImage} />
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
                            <div className='d-flex justify-content-between align-items-center bottom'>
                                <div className='d-flex justify-content-between  align-items-center gap-2'>
                                    <div>
                                        <Rating
                                            placeholderRating={rating}
                                            readonly
                                            emptySymbol={<FaRegStar></FaRegStar>}
                                            placeholderSymbol={<FaStar className='text-danger'></FaStar>}
                                            fullSymbol={<FaStar></FaStar>}
                                        />
                                    </div>
                                    <div>
                                        {rating}
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => setIsClicked(!isClicked)}>
                                        <span className="icon"> {isClicked ? <FaHeart className='text-danger'></FaHeart> : <FaRegHeart></FaRegHeart>} </span>

                                    </button>
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