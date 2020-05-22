import React, {Component} from 'react';
import styled from 'styled-components'
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen,closeModal} = value;
                    const {img, title, price} = value.modalProduct

                    if (!modalOpen) {
                        return null
                    } else {
                        return( <ModalContainer>
                            <div className="container">
                            </div>

                        </ModalContainer>)
                    }

                }}
            </ProductConsumer>
        );
    }
}
const ModalContainer = styled.div`

`
export default Modal;
