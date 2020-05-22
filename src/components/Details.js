import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt={title}/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 ">
                                   <h2>Model: {title}</h2>
                                    <h5 className="  text-muted mt-3 mb-2">
                                        Made by: <span className="">{company}</span>
                                    </h5>
                                    <h4><strong>price: <span>$</span>{price}</strong></h4>
                                    <p className=" font-weight-bold mt-3 mb-0">
                                        Some info about product:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to='/'>
                                            <button className="btn btn-primary">back to products</button>
                                        </Link>
                                        <button className="btn btn-danger ml-3"
                                                disabled={inCart ? true : false}
                                                onClick={() => {
                                                    value.addToCard(id)
                                                }}>
                                            {inCart ? 'inCart' : 'add to cart'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;
