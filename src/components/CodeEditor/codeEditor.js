import ReactAce from 'react-ace';
import React, {Component} from 'react';
import brace from 'brace';
import {addSymbol} from '../../store/actions/statActions'
import { connect } from 'react-redux';

import 'brace/mode/javascript';
import 'brace/theme/terminal';

class CodeEditor extends Component {
    constructor(props) {
        super(props);
        this.forUpdate = false;
        this.state = {
            code: localStorage.code || ''
        }
    }

    onChange = (newValue, e) => {
        localStorage["code"] = newValue;
        this.props.addSymbol();
    }

    aceWriteCode = (text) => {
        //this.ace.editor.setValue(text || "")
        this.setState({
            code: text
        })
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.writeCode) {
            if (this.forUpdate == false) {
                if (this.props.answer){
                    this.aceWriteCode(nextProps.textAnswer);
                    this.forUpdate = false
                } else {
                    this.aceWriteCode(nextProps.text);
                    this.forUpdate = false
                }
            }
        }
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.writeCode || this.props.hideChat === null) {
            return true
        }
        return false
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
                    bindKey: {win: 'Ctrl-shift-x', mac: 'Command-shift-x'}, //key combination used for the command.
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
         hideChat: store.hideChat
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addSymbol: () => dispatch(addSymbol())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);
