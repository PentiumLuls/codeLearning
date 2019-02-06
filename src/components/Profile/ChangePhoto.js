import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import React from "react";
import {notes} from '../../plot/ruls_1';

class Popup extends React.Component {

    setNanachi = () => {
        this.props.changeAvatar('nanachi')
        if (localStorage['music'] !== 'nnnaaa') {
            this.props.changeMusic('nnnaaa')
        }
    }

    setPhoto = (photo) => {
        this.props.changeAvatar(photo)
        if (localStorage['music'] !== 'sans') {
            this.props.changeMusic('sans')
        }
    }

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
                    <div onClick={this.setPhoto.bind(this, 'vanDam')} className="avatar-card">
                        <img alt="Van Darkholme" src={require("../img/avatars/VanDarkholme.jpg")}/>
                        <h3>Гачимучи</h3>
                        <p>Не ну это бан</p>
                    </div>
                    <div onClick={this.setPhoto.bind(this, 'papich')} className="avatar-card">
                        <img alt="Roflan" src={require("../img/avatars/papich.jpeg")}/>
                        <h3>Орущий челик</h3>
                        <p>Лютый челик орёт</p>
                    </div>
                    <div onClick={this.setPhoto.bind(this, 'reroRero')} className="avatar-card">
                        <img alt="Roflan" src={require("../img/avatars/reroRero.gif")}/>
                        <h3>RERO-RERO-RERO-RERO</h3>
                        <p>Это шо, жожо референс?!?!</p>
                    </div>
                    <div onClick={this.setPhoto.bind(this, 'futaba')} className="avatar-card">
                        <img alt="Roflan" src={require("../img/avatars/futaba.jpg")}/>
                        <h3>RERO-RERO-RERO-RERO</h3>
                        <p>Это шо, жожо референс?!?!</p>
                    </div>
                    <div onClick={this.setNanachi} className="avatar-card">
                        <img alt="Roflan" src={require("../img/avatars/nanachi.jpg")}/>
                        <h3>RERO-RERO-RERO-RERO</h3>
                        <p>Это шо, жожо референс?!?!</p>
                    </div>
                    <div onClick={this.setPhoto.bind(this, 'pikachu')} className="avatar-card">
                        <img alt="Roflan" src={require("../img/avatars/pikachu.png")}/>
                        <h3>RERO-RERO-RERO-RERO</h3>
                        <p>Это шо, жожо референс?!?!</p>
                    </div>
                    <div onClick={this.setPhoto.bind(this, 'ricardo')} className="avatar-card">
                        <img alt="Roflan" src={require("../img/avatars/ricardo.jpg")}/>
                        <h3>RERO-RERO-RERO-RERO</h3>
                        <p>Это шо, жожо референс?!?!</p>
                    </div>
                    <div onClick={this.setPhoto.bind(this, 'splinter')} className="avatar-card">
                        <img alt="Roflan" src={require("../img/avatars/splinter.jpg")}/>
                        <h3>RERO-RERO-RERO-RERO</h3>
                        <p>Это шо, жожо референс?!?!</p>
                    </div>
                    <div onClick={this.setPhoto.bind(this, 'zeroTwo')} className="avatar-card">
                        <img alt="Roflan" src={require("../img/avatars/zeroTwo.jpeg")}/>
                        <h3>RERO-RERO-RERO-RERO</h3>
                        <p>Это шо, жожо референс?!?!</p>
                    </div>
                    <div onClick={this.setPhoto.bind(this, 'denis')} className="avatar-card">
                        <img alt="Roflan" src={require("../img/avatars/denis.jpeg")}/>
                        <h3>RERO-RERO-RERO-RERO</h3>
                        <p>Это шо, жожо референс?!?!</p>
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