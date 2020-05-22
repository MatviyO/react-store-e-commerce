import React, {Component} from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";
import PropTypes from 'prop-types'

class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            <div className="img-container p-5" onClick={() => {
                                value.handleDetail(id)
                                value.openModal(id)
                            }}>
                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top"/>
                                </Link>
                                <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {
                                    value.addToCard(id);
                                    value.openModal(id);
                                }}>
                                    {inCart ? (<p className="text-capitalize mb-0" disabled>{""} in Card</p>)
                                        : (<p className="fa fa-shopping-cart mb-0"></p>)}
                                </button>
                            </div>
                        )}
                </ProductConsumer>
                <div className="card-footer d-flex justify-context-between">
                    <p className="aligtn-self-center mb-0">
                        {title}
                    </p>
                    <p className="ml-4 text-danger">
                        {price}<span className="mr-1">$</span>
                    </p>
                </div>
            </div>
    </ProductWrapper>
    );
    }
    }
    Product.propsTypes = {
    product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
    }).isRequired
    };
    export default Product;
    const ProductWrapper = styled.div`
    .card {
    border-color: transparent;
    transitions: all 2s linear;
    }
    .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 2s linear;
    }
    &:hover {
    .card {
    border: 0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer {
    background: rgba(247, 247, 247);
    }
    }
    .img-container {
    position:relative;
    overflow: hidden;
    }
    .card-img-top {
    transition: all 1s linear
    }
    .img-container:hover .card-img-top {
    transform: scale(1.2);
    }
    .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--danger);
    border: none;
    color: var(--mainWhite);
    fonxt-size: 1.2rem;
    border-radius: 0.2rem 0.2rem ;
    transform: translete(100%, 100%);
    }
    .img-container:hover .cart-btn {
    transform:translete(0, 0);
    }


    `
