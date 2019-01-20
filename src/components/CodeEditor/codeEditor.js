import ReactAce from 'react-ace-editor';
import React, {Component} from 'react';


class CodeEditor extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.state = {
            code: 'qweqwewqe'
        }
    }

    onChange(newValue, e) {
        this.setState({
            code: newValue
        })
        this.props.updateTerminal(this.state.code)
    }

    
    componentWillReceiveProps(newProps) {
        this.setState({
            code: "newProps.code"
        })
        console.log("componentWillReceiveProps")
    }

    render() {
        console.log("render")
        console.log(this.state.code)
        return (
            <ReactAce
                mode="javascript"
                theme="dracula"
                onChange={this.onChange}
                style={{height: '100%', fontSize: '20px', position: 'relative'}}
                setValue={this.state.code}
                ref={instance => {
                    this.ace = instance;
                }} // Let's put things into scope
            />
        );
    }
}


export default CodeEditor;
