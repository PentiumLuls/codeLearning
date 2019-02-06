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
                <div className="avatar-cards-wrapper">
                    <div className="avatar-card">
                        <img alt="Van Darkholme" src={require("../img/avatars/VanDarkholme.jpg")}/>
                        <h3>Гачимучи</h3>
                        <p>Не ну это бан</p>
                    </div>
                    <div className="avatar-card">
                        <img alt="Roflan" src={require("../img/avatars/placeholder.jpeg")}/>
                        <h3>Орущий челик</h3>
                        <p>Лютый челик орёт</p>
                    </div>
                    <div className="avatar-card">
                        <img alt="Indus" src={require("../img/avatars/placeholder.png")}/>
                        <h3>Индус</h3>
                        <p>Лютый индус существует</p>
                    </div>
                    <div className="avatar-card inactive">
                        <img alt="Indus" src={require("../img/avatars/placeholder.png")}/>
                        <h3>Индус</h3>
                        <p>Лютый индус существует</p>
                        <div className="avatar-card-caption">гавно жопа</div>
                    </div>
                </div>
            </PureModal>
        );
    }
}


export default Popup;