import React, { Component } from 'react';
import Stats from './Stats';
import Settings from './Settings';
import Achievements from './Achievements/AchievementsRenderer';
import { connect } from 'react-redux';
import {addMoney, spendMoney} from "../../store/actions/moneyActions";
import {setHotKey} from "../../store/actions/codeActions";
import { changeMusicValue, changeSoundValue, changeAvatar} from "../../store/actions/statActions";
import Popup from "./ChangePhoto";
import vanDam from '../img/avatars/VanDarkholme.jpg';
import papich from '../img/avatars/papich.jpeg';
import futaba from '../img/avatars/futaba.jpg';
import nanachi from '../img/avatars/nanachi.jpg';
import pikachu from '../img/avatars/pikachu.png';
import reroRero from '../img/avatars/reroRero.gif';
import ricardo from '../img/avatars/ricardo.jpg';
import splinter from '../img/avatars/splinter.jpg';
import zeroTwo from '../img/avatars/zeroTwo.jpeg';
import denis from '../img/avatars/denis.jpeg'


const avatars = {vanDam, papich, futaba, nanachi, pikachu, reroRero, ricardo, splinter, zeroTwo, denis}


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stats: true,
            popup: false
        }
    }

    openSettings = () => {
        this.setState({
            stats: false
        })
    };

    openStats = () => {
        this.setState({
            stats: true
        })
    };

    averageTime = () => {
        let summ = 0;
        let amount = 0;
        this.props.records.forEach((el) => {
             summ += el.reduce((a, b) => {
                amount += 1;
                return a+b
             }, 0)
        });


        if (!summ && !amount) {
            return "00:00:00"
        }

        let average = Math.round(summ / amount);

        average = `${average / 360 ^ 0 < 10 ? '0' + (average / 360 ^ 0) : average / 360 ^ 0}
        :${average % 360 / 60 ^ 0 < 10 ? '0' + (average % 360 / 60 ^ 0) : average % 360 / 60 ^ 0 < 10}
        :${average % 21600 < 10 ? '0' + (average % 21600) : average % 21600}`

        return average
    };

    openPopup = () => {
        this.setState({
            popup: true
        })
    }

    togglePopup = () => {
        this.setState({
            popup: false
        })
    }

    render() {
        return (
            <div>
                <div className="profile-top-wrapper">
                    <div className="profile-top-image-wrapper">
                        <div onClick={this.openPopup} className="profile-top-image avatar"><img alt="avatar" src={avatars[this.props.avatar]}/></div>
                    </div>
                    <div className="profile-top-switcher">
                        {this.state.stats
                        ? <div className="open-settings" onClick={this.openSettings}></div>
                        : <div className="open-stats" onClick={this.openStats}></div>}
                        {this.state.stats
                        ? <Stats stats={this.props.stats} timeInGame={this.props.timeInGame} records={this.props.records} averageTime={this.averageTime()}></Stats>
                        : <Settings changeMusicValue={this.props.changeMusicValue} 
                                    changeSoundValue={this.props.changeSoundValue}
                                    musicValue={this.props.musicValue} soundValue={this.props.soundValue}
                                    hotKey={this.props.hotKey} setHotKey={this.props.setHotKey}></Settings>}
                    </div>
                </div>

                <Achievements addMoney={this.props.addMoney} timeInGame={this.props.timeInGame}></Achievements>
                {this.state.popup ? <Popup spendMoney={this.props.spendMoney} changeAvatar={this.props.changeAvatar} togglePopup={this.togglePopup}></Popup> : null}
            </div>
        )
    }

}

const mapStateToProps = store => {
    return {
        stats: store.stats,
        timeInGame: store.timeInGame,
        records: store.records,
        hotKey: store.hotKey,
        musicValue: store.musicValue,
        soundValue: store.soundValue,
        avatar: store.avatar
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMoney: (value) => dispatch(addMoney(value)),
        setHotKey: (key) => dispatch(setHotKey(key)),
        changeMusicValue: (value) => dispatch(changeMusicValue(value)),
        changeSoundValue: (value) => dispatch(changeSoundValue(value)),
        changeAvatar: (value) => dispatch(changeAvatar(value)),
        spendMoney: (value) => dispatch(spendMoney(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)