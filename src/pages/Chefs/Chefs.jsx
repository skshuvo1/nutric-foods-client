// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import { Row } from 'react-bootstrap';

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
            <div className='container flex gap-4 '>
            <Row xs={1} md={2} lg={3}>
            {
                chefsData.map(chef => <Cards key = {chef.id} chef = {chef}></Cards>)
            }
            </Row>
            </div>
        </div>
    );
};

export default Chefs;