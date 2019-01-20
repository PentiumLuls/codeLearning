import ReactAce from 'react-ace-editor';
import React, {Component} from 'react';

class CodeEditor extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.state = {
            code: 'qweqwewqe',
        };
        this.forUpdate = 0;
    }

    onChange(newValue, e) {
        this.setState({
            code: newValue
        })
        this.props.updateTerminal(this.state.code)
    }

    componentDidUpdate() {
        if (this.forUpdate == 0){
            console.log("component did update first")
            this.forUpdate = 1
        } else{
            const editor = this.ace.editor
            editor.setValue(this.props.text)
            this.forUpdate = 0
            console.log("component did update next")
        }
    }

    render(props) {
        console.log("render");
        return (
            <ReactAce
                mode="javascript"
                theme="dracula"
                onChange={this.onChange}
                style={{height: '100%', fontSize: '20px', position: 'relative'}}
                setValue={this.props.text}
                ref={instance => {
                    this.ace = instance;
                }} // Let's put things into scope
            />
        );
    }

    componentDidMount() {
        const editor = this.ace.editor
        editor.setValue("")
    }
}


export default CodeEditor;
