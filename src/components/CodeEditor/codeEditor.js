import ReactAce from 'react-ace';
import React, {Component} from 'react';
import { connect } from 'react-redux';

import 'brace/mode/javascript';
import 'brace/theme/terminal';

class CodeEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        }
    }

    onChange = (newValue, e) => {
        console.log(newValue);
    }

    aceWriteCode = (text) => {
        this.setState({
            code: text
        })
    }

    render() {
        return (
            <ReactAce
                mode="javascript"
                theme="terminal"
                onChange={this.onChange}
                onFocus={this.props.hideChat}
                height='100%'
                fontSize='20px'
                width='100%'
                value={this.state.code}
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                style={{position: 'relative'}}
                commands={[{   // commands is array of key bindings.
                    name: 'runCode', //name for the key binding.
                    bindKey: {win: this.props.hotKey, mac: this.props.hotKey}, //key combination used for the command.
                    exec: () => { this.props.run() }  //function to execute when keys are pressed.
                  }]}
                setOptions={{
                    autoScrollEditorIntoView: true,
                    highlightActiveLine: false

                }}
                ref={instance => {
                    this.ace = instance;
                }} // Let's put things into scope
            />
        );
    }
}


const mapStateToProps = store => {
    return {
         run: store.run,
         hideChat: store.hideChat,
         hotKey: store.hotKey
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);
