import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import React from "react";

class Popup extends React.Component {
    render() {
        return (
            <PureModal
                header="Всем привет"
                footer={<div>
                    <button onClick={this.props.togglePopup} ref={(node) => {this._okButton = node}}>Я готов</button>
                </div>}
                onClose={() => {
                    this._okButton.click();
                    console.log('handle closing');
                    return true;
                }}
                isOpen
                ref="modal"
            >
                <p>Ты попал на крутой квест по функциональному программированию</p>
                <p>Квест находиться в стадии разработки, много что не доделано и много багов!</p>
                <p>Тебе будут давать очень сжатую и абстрактную теорию,</p>
                <p>и если ты что то не понял или хочеш изучить главу поподробнее переходи по сылкам в журнале</p>
            </PureModal>
        );
    }
}


export default Popup;