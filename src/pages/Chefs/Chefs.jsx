// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Chefs = () => {

    const [chefsData, setChefsData] = useState([]);
    console.log(chefsData);

    useEffect(() => {
        fetch('http://localhost:3000/allData')
        .then(res => res.json())
        .then(data => setChefsData(data))
        .catch('error', console.error('error'))
    },[])
    return (
        <div>
            <h3>Choose Your Favorite Chefs Here</h3>
            <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`chefsData.image`} />
      <Card.Body>
        <Card.Title>{chefsData.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
            </div>
        </div>
    );
};

export default Chefs;