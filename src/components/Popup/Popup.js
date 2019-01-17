import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import React from "react";

class Popup extends React.Component {
    render() {
        return (
            <PureModal
                header="Functional programming. Getting started"
                footer={<div>
                    <button onClick={this.props.togglePopup} ref={(node) => {this._okButton = node}}>Понятноб</button>
                </div>}
                onClose={() => {
                    this._okButton.click();
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