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
        console.log("I AM EDITOR", nextProps.writeCode)
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
                style={{position: 'relative'}}
                ref={instance => {
                    this.ace = instance;
                }} // Let's put things into scope
            />
        );
    }
}


export default CodeEditor;
