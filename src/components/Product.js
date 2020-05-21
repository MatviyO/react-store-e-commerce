import React, {Component} from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";

class Product extends Component {
    render() {
        const {id, title, img, price, inCard} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={() => console.log('sdkfk')}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        <button className="card-btn" disabled={}>

                        </button>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}
export default Product;
const ProductWrapper = styled.div`
    
`
