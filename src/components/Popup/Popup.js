import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import React from "react";

class Popup extends React.Component {
    render() {
        return (
            <PureModal
                header="Functional programming. Getting started"
                footer={<div>
                    <button onClick={this.props.togglePopup}>Понятноб</button>
                </div>}
                onClose={() => {
                    console.log('handle closing');
                    return true;
                }}
                isOpen
                ref="modal"
            >
                <p>SOME text about functional programming</p>
                <p>task text?</p>
            </PureModal>
        );
    }
}

export default Popup;