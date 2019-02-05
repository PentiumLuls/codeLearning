import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import React from "react";
import {notes} from '../../plot/ruls_1';

class Popup extends React.Component {
    render() {
        return (
            <PureModal
                header='Вибери картинку'
                footer={<div>
                    <button onClick={this.props.togglePopup} ref={(node) => {this._okButton = node}}>Я готов</button>
                </div>}
                width='70%'
                onClose={() => {
                    this._okButton.click();
                    return true;
                }}
                isOpen
                ref="modal"
            >
                
            </PureModal>
        );
    }
}


export default Popup;