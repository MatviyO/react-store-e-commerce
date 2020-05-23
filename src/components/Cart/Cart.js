import React, {Component} from 'react';
import {ProductConsumer} from "../../context";
import Title from "../Title";
import EmptyCart from "./EmptyCart";
import CartColums from "./CartColums";
import CartList from "./CartList";

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart"/>
                                    <CartColums/>
                                    <CartList value={value} />
                                </React.Fragment>
                            )
                        } else {
                            return (
                                <EmptyCart/>
                            )
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart;
