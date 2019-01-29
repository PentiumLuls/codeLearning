import ReactAce from 'react-ace';
import React, {Component} from 'react';
import brace from 'brace'

import 'brace/mode/javascript';
import 'brace/theme/terminal';

class CodeEditor extends Component {
    constructor() {
        super();
        this.forUpdate = false;
        this.state = {
            code: localStorage.code || ''
        }
    }

    onChange(newValue, e) {
        localStorage["code"] = newValue;
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
        if (nextProps.writeCode) {
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
                height='100%'
                fontSize='20px'
                width='100%'
                value={this.state.code}
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                style={{position: 'relative'}}
                commands={[{   // commands is array of key bindings.
                    name: 'runCode', //name for the key binding.
                    bindKey: {win: 'Ctrl-shift-z', mac: 'Command-shift-z'}, //key combination used for the command.
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


export default CodeEditor;
