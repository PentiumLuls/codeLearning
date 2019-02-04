import React, { Component } from 'react';
import Stats from './Stats';
import Settings from './Settings';
import Achievements from './Achievements';
import { connect } from 'react-redux';


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
    }

    openStats = () => {
        this.setState({
            stats: true
        })
    }

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
                        ? <Stats></Stats>
                        : <Settings></Settings>}
                    </div>
                </div>
                
                <Achievements></Achievements>
            </div>
        )
    }
    
}

const mapStateToProps = store => {
    return {

    }
}

export default connect(mapStateToProps)(Profile)