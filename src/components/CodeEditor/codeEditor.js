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
        if (nextProps.notUpdateEditor == 0){
            if (this.forUpdate == false){
                this.forUpdate = true
    
            } else{
                const editor = this.ace.editor
                editor.setValue(this.props.text)
                this.forUpdate = false
            
            }
        } else {
            this.forUpdate = false
        }
    }

    render() {
        return (
            <ReactAce
                mode="javascript"
                theme="dracula"
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
