import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../Product/Product';
const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products/')
            setProducts(data);
        }

        fetchProducts()
    }, [])

    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map(pd => (
                    <Col key={pd._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={pd}></Product>

                    </Col>
                ))}

            </Row>

        </div>
    );
};

export default HomeScreen;