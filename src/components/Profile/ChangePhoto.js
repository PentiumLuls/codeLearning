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

    buyAvatar = (avatar, money) => {
        if (this.props.money - money >= 0) {
            this.props.unlockAvatar(avatar);
            this.props.spendMoney(money);
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
                        <img alt="Papich" src={require("../img/avatars/papich.jpeg")}/>
                        <h3>Орущий челик</h3>
                        <p>Лютый челик орёт</p>
                    </div>
                    <div onClick={this.props.unlockedAvatars['reroRero'] ? this.setPhoto.bind(this, 'reroRero') : this.buyAvatar.bind(this, 'reroRero', 50)} 
                        className={this.props.unlockedAvatars['reroRero'] ? "avatar-card" : "avatar-card inactive"}>
                        <img alt="Kakyoin" src={require("../img/avatars/reroRero.gif")}/>
                        <h3>RERO-RERO-RERO-RERO</h3>
                        <p>это шо жожорефренс</p>
                        {this.props.unlockedAvatars['reroRero'] ? null : <div className="avatar-card-caption">Гони 50 сыра</div>}
                    </div>
                    
                    <div onClick={this.props.unlockedAvatars['nanachi'] ? this.setNanachi : this.buyAvatar.bind(this, 'nanachi', 150)} 
                        className={this.props.unlockedAvatars['nanachi'] ? "avatar-card" : "avatar-card inactive"}>
                        <img alt="Nanachi" src={require("../img/avatars/nanachi.jpg")}/>
                        <h3>Наначи</h3>
                        <p>Наначи говорит "Нннааа" 10 часов</p>
                        {this.props.unlockedAvatars['nanachi'] ? null : <div className="avatar-card-caption">Гони 150 сыра</div>}
                    </div>
                    <div onClick={this.props.unlockedAvatars['pikachu'] ? this.setPhoto.bind(this, 'pikachu') : null} 
                        className={this.props.unlockedAvatars['pikachu'] ? "avatar-card" : "avatar-card inactive"}>
                        <img alt="owo" src={require("../img/avatars/pikachu.png")}/>
                        <h3>О.О</h3>
                        <p>oшo what's this</p>
                        {this.props.unlockedAvatars['pikachu'] ? null : <div className="avatar-card-caption">Требуется: </div>}
                    </div>
                    <div onClick={this.props.unlockedAvatars['ricardo'] ? this.setPhoto.bind(this, 'ricardo') : null} 
                        className={this.props.unlockedAvatars['ricardo'] ? "avatar-card" : "avatar-card inactive"}>
                        <img alt="Slavyanin" src={require("../img/avatars/ricardo.jpg")}/>
                        <h3>Рикардо Милосов</h3>
                        <p>Советский солдат протягивает руку помощи</p>
                        {this.props.unlockedAvatars['ricardo'] ? null : <div className="avatar-card-caption">Требуется: </div>}
                    </div>
                    <div onClick={this.props.unlockedAvatars['splinter'] ? this.setPhoto.bind(this, 'splinter') : null} 
                        className={this.props.unlockedAvatars['splinter'] ? "avatar-card" : "avatar-card inactive"}>
                        <img alt="Krysa" src={require("../img/avatars/splinter.jpg")}/>
                        <h3>Сплинтер</h3>
                        <p>Контент для олдфагов</p>
                        {this.props.unlockedAvatars['splinter'] ? null : <div className="avatar-card-caption">Требуется: </div>}
                    </div>
                    <div onClick={this.props.unlockedAvatars['zeroTwo'] ? this.setPhoto.bind(this, 'zeroTwo') : null} 
                        className={this.props.unlockedAvatars['zeroTwo'] ? "avatar-card" : "avatar-card inactive"}>
                        <img alt="Roflan" src={require("../img/avatars/zeroTwo.jpeg")}/>
                        <h3>Худшая девочка</h3>
                        <p>Худшая девочка в 3D - худшая комбинация</p>
                        {this.props.unlockedAvatars['zeroTwo'] ? null : <div className="avatar-card-caption">Требуется: </div>}
                    </div>
                    <div onClick={this.props.unlockedAvatars['denis'] ? this.setPhoto.bind(this, 'denis') : null} 
                        className={this.props.unlockedAvatars['denis'] ? "avatar-card" : "avatar-card inactive"}>
                        <img alt="Kakoj-to loh" src={require("../img/avatars/denis.jpeg")}/>
                        <h3>Тысячник</h3>
                        <p>Ну это челик</p>
                        {this.props.unlockedAvatars['denis'] ? null : <div className="avatar-card-caption">Требуется: </div>}
                    </div>
                </div>
            </PureModal>
        );
    }
}


export default Popup;