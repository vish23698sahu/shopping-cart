import React from 'react';
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import './Header.css';

export const Header = () => {
    const {
        state: { cart },
        dispatch,
        productDispatch,
    } = CartState();

    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }} >
            <Container>
                <Navbar.Brand>
                    <Link to='/'>Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search' >
                    <FormControl
                        className='m-auto'
                        style={{ width: 500 }}
                        placeholder='Search a Product'
                        onChange={(e) => {
                            productDispatch({
                                type: 'FILTER_BY_SEARCH',
                                payload: e.target.value,
                            });
                        }}
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown align={'end'}>
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge className='badge bg-success ' >{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ miWidth: 370 }}>
                            {cart.length > 0 ? (
                                <div>
                                    {
                                        cart.map((prod) => (
                                            <span className='cartItem' key={prod.id} >
                                                <img
                                                    src={prod.image}
                                                    className='cartItem__img'
                                                    alt={prod.name}
                                                />
                                                <div className='cartItem__detail'>
                                                    <span>{prod.name}</span>
                                                    <span>₹{prod.price}</span>
                                                </div>
                                                <AiFillDelete
                                                    fontSize='20px'
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() =>
                                                        dispatch({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: prod,
                                                        })
                                                    }
                                                />
                                            </span>
                                        ))}
                                    <Link to='/cart'>
                                        <Button style={{ width: '95%', margin: '0 10px' }} >
                                            Go To Cart
                                        </Button>
                                    </Link>
                                </div>
                            ) : (
                                <span style={{ padding: 10 }} >Cart is empty</span>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar >
    )
}
