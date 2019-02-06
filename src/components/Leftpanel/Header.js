import React, { Component } from 'react';
import { connect } from 'react-redux';
import vanDam from '../img/avatars/VanDarkholme.jpg';
import papich from '../img/avatars/papich.jpeg';
import futaba from '../img/avatars/futaba.jpg';
import nanachi from '../img/avatars/nanachi.jpg';
import pikachu from '../img/avatars/pikachu';
import reroRero from '../img/avatars/reroRero.gif';
import ricardo from '../img/avatars/ricardo.jpg';
import splinter from '../img/avatars/splinter.jpg';
import zeroTwo from '../img/avatars/zeroTwo.jpeg';


const avatars = {vanDam, papich, futaba, nanachi, pikachu, reroRero, ricardo, splinter, zeroTwo}

class Header extends Component {

    constructor() {
        super();
        this.click = () => {
            this.props.func();
        }
        this.click2 = () => {
            this.props.func2();
        }
    }

    render() {
      return (
            <header className="userinfo">
                        <div className="avatar-wrapper">
                        <div onClick={this.props.func3} className="avatar"><img alt="avatar" src={avatars[this.props.avatar]}/></div>
                            <div className="header-money"><p>{this.props.money}</p></div>
                        </div>
                        <div className="userbuttons">
                            <span className="userbutton" onClick={this.click}><p>Журнал</p></span>
                            <span className="userbutton" onClick={this.click2}><p>Редактор кода</p></span>
                        </div>
            </header>
      );
    }
  }

const mapStateToProps = store => {
    return {
        money: store.money,
        avatar: store.avatar
    }
}

export default connect(mapStateToProps)(Header);

