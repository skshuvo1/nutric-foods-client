// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import { Row } from 'react-bootstrap';
import './Chefs.css'

const Chefs = () => {

    const [chefsData, setChefsData] = useState([]);
    // console.log(chefsData);

    useEffect(() => {
        fetch('https://the-nutric-food-server-skshuvo1.vercel.app/allData')
        .then(res => res.json())
        .then(data => setChefsData(data))
        .catch('error')
    },[])
    return (
        <div className='chef-container'>
            <h2 className='text-center mb-5 py-3'>Choose Your Favorite Chefs Here</h2>
            <div className='container flex'>
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