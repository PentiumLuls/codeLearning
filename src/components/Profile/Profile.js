import React, { Component } from 'react';
import Stats from './Stats';
import Settings from './Settings';
import Achievements from './Achievements/AchievementsRenderer';
import { connect } from 'react-redux';
import {addMoney} from "../../store/actions/moneyActions";


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stats: true
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

    render() {
        return (
            <div>
                <div className="profile-top-wrapper">
                    <div className="profile-top-image-wrapper">
                        <div className="profile-top-image"><img alt="avatar" src={require("../../img/VanDarkholme.jpg")}/></div>
                    </div>
                    <div className="profile-top-switcher">
                        {this.state.stats
                        ? <div className="open-settings" onClick={this.openSettings}></div>
                        : <div className="open-stats" onClick={this.openStats}></div>}
                        {this.state.stats
                        ? <Stats stats={this.props.stats} timeInGame={this.props.timeInGame} records={this.props.records} averageTime={this.averageTime()}></Stats>
                        : <Settings></Settings>}
                    </div>
                </div>
                
                <Achievements addMoney={this.props.addMoney}></Achievements>
            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        addMoney: (value) => dispatch(addMoney(value))
    }
};

const mapStateToProps = store => {
    return {
        stats: store.stats,
        timeInGame: store.timeInGame,
        records: store.records
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)