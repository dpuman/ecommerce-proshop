import React, { useEffect } from 'react';
import { Button, Card, Col, Form, Image, ListGroup, Nav, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { addToCart, removeFromCart } from '../../redux/actions/cartAction';
import Message from '../Message';


const CartScreen = () => {
    const { id } = useParams()
    const productId = id;
    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams();
    const searchQty = searchParams.get('qty');
    // console.log({ searchQty });

    const qty = searchQty ? Number(searchQty) : 1;
    // console.log({ qty });
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    // console.log({ cartItems });

    useEffect(() => {
        dispatch(addToCart(productId, qty))

    }, [dispatch, qty, productId])

    const removeFromCartHandler = (id) => {
        // console.log(id);
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        navigate(`/login?redirect=shipping`)

    }
    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message variant='info'>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>

                                        <Link style={{ textDecoration: 'none' }} to={`/product/${item.product}`}>{item.name}</Link>



                                    </Col>

                                    <Col md={2}>
                                        ${item.price}
                                    </Col>

                                    <Col md={3}>
                                        <Form.Control
                                            as="select"
                                            value={item.qty}
                                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                        >
                                            {

                                                [...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))
                                            }

                                        </Form.Control>
                                    </Col>

                                    <Col md={1}>
                                        <Button
                                            type='button'
                                            variant='light'
                                            onClick={() => removeFromCartHandler(item.product)}
                                        >
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>

            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup.Item>
                        <Button
                            type='button'
                            className='btn-block'
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}
                        >
                            Proceed To Checkout
                        </Button>
                    </ListGroup.Item>


                </Card>
            </Col>
        </Row>
    );
};

export default CartScreen;