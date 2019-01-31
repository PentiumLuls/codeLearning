import React, { Component } from 'react';
import Stats from './Stats';
import Settings from './Settings';
import Achievements from './Achievements';
import { connect } from 'react-redux';


class Profile extends Component {

    render() {
        return (
            <div>
                <Stats></Stats>
                <Settings></Settings>
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