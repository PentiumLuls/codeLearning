import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import React from "react";

class Popup extends React.Component {
    render() {
        return (
            <PureModal
                header="Здраствуй странник"
                footer={<div>
                    <button onClick={this.props.togglePopup} ref={(node) => {this._okButton = node}}>КОнечно МИлорд</button>
                </div>}
                onClose={() => {
                    this._okButton.click();
                    console.log('handle closing');
                    return true;
                }}
                isOpen
                ref="modal"
            >
                <p>Ты попал на крутой квест-рпг по функциональному программированию!</p>
                <p>Ты готов поднапрячь мозги?</p>
            </PureModal>
        );
    }
}


export default Popup;