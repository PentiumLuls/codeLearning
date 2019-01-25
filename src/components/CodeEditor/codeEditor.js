import ReactAce from 'react-ace-editor';
import React, {Component} from 'react';

class CodeEditor extends Component {
    constructor() {
        super();
        this.forUpdate = false;
    }

    onChange(newValue, e) {
        localStorage["code"] = newValue;
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.notUpdateEditor == 0) {
            if (this.forUpdate == false) {
                if (this.props.answer){
                    const editor = this.ace.editor;
                    editor.setValue(nextProps.textAnswer);
                    this.forUpdate = false
                } else {
                    const editor = this.ace.editor;
                    editor.setValue(nextProps.text);
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
                style={{height: '100%', fontSize: '20px', position: 'relative'}}
                ref={instance => {
                    this.ace = instance;
                }} // Let's put things into scope
            />
        );
    }

    componentDidMount() {
        const editor = this.ace.editor
        editor.setValue(localStorage.code || "")
        
    }
}


export default CodeEditor;
