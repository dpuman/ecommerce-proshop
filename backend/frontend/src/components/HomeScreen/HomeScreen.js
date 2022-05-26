import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { listProducts } from '../../redux/actions/productActions';
import Loader from '../Loader';
import Message from '../Message';
import Paginate from '../Paginate/Paginate';
import Product from '../Product/Product';
import ProductCarousel from '../ProductCarousel/ProductCarousel';
const HomeScreen = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, products, error, page, pages } = productList

    const keyword = location.search


    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])



    return (
        <div>
            {!keyword && <ProductCarousel />}
            <h1>Latest Products (updated)</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />

                    </div>
            }



        </div>
    );
};

export default HomeScreen;