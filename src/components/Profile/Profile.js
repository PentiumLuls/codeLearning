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
                {this.state.stats
                ? <button onClick={this.openSettings}>openSettings</button>
                : <button onClick={this.openStats}>openStats</button>}
                {this.state.stats 
                ? <Stats></Stats>
                : <Settings></Settings>}
                
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