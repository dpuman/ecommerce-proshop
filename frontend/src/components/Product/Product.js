import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const Product = (props) => {
    const { product } = props

    return (
        <Card className="my-3 p-3 rounded" style={{ width: '18rem' }}>
            <Link to={`/product/${product._id}`}>
                <Card.Img variant="top" src={product.image} />
            </Link>

            <Card.Body>
                <Link style={{ textDecoration: 'none' }} to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        { } from
                        <Rating value={product.rating} text={`&${product.numReviews} reviews`} color={'#f8e825'}></Rating>
                    </div>
                </Card.Text>

                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default Product;