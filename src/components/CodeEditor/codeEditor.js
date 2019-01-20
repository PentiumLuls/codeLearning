import ReactAce from 'react-ace-editor';
import React, {Component} from 'react';

class CodeEditor extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.state = {
            code: ''
        }
    }

    onChange(newValue, e) {
        this.setState({
            code: newValue
        })
        this.props.updateTerminal(this.state.code)
    }

    render(props) {
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
}


export default CodeEditor;
