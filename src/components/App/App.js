import React, {Component} from 'react';
import './App.css';
import Codeditor from '../CodeEditor/codeEditor';
import Terminal from '../Terminal/Terminal';
import Leftpanel from '../Leftpanel/Leftpanel';
import {connect} from 'react-redux';
import {changeShowPopup} from '../../store/actions/codeActions';
import {tickTimeInGame, unlockAvatar} from '../../store/actions/statActions';
import {updateAchievements} from "../Profile/Achievements/achievementsHandler";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            terminalOpen: false,
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="main">
                <div className="code-mode">
                    <div className="leftpanel">
                        <Leftpanel/>
                    </div>
                    <div className="code-editor">
                        <Codeditor/>
                    </div>
                    <div className="terminal">
                        <Terminal/>
                    </div>
                </div>
            </div>
        )

    }

    updateAchievements = updateAchievements;
}


const mapStateToProps = store => {
    return {
        passStages: store.passStages,
        passQuests: store.passQuests,
        currentStage: store.currentStage,
        currentQuest: store.currentQuest,
        writeCode: store.writeCode,
        code: store.code,
        resets: store.resets,
        showPopup: store.showPopup,
        musicValue: store.musicValue,
        music: store.music
    }
};

const mapDispatchToProps = dispatch => {
    window.unlockAvatar = (value) => dispatch(unlockAvatar(value));
    return {
        changeShowPopup: (can) => dispatch(changeShowPopup(can)),
        tickTimeInGame: () => dispatch(tickTimeInGame()),
        unlockAvatar: (value) => dispatch(unlockAvatar(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


