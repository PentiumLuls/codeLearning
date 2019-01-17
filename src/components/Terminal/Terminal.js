import React, {Component} from 'react';

class Terminal extends Component {

    constructor() {
        super();
        this.state={
            code: "NO CODE"
        }
    }

    run=  () => {
        //////////PUBLIC VAR////////
        const console = {};
        console.log = (props) => {this.log(props)};
        ////////////////////////////

        try {
            document.querySelector('.terminal-text').textContent = eval(this.state.code);
        } catch (err) {
            document.querySelector('.terminal-text').textContent = err;
        }
    };

    componentDidMount() {
        document.querySelector('.terminal-text').textContent = "som"
        // this.term = new Terminal();
        // this.term.open(document.querySelector('.terminal-text'));
        // this.term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');

        // document.querySelector('.xterm-helpers').style.display = 'none';
        // document.querySelector('.xterm-selection-layer').style.display = 'none';
        // document.querySelector('.xterm-link-layer').style.display = 'none';
        // document.querySelector('.xterm-cursor-layer').style.display = 'none';


    }

    componentWillReceiveProps(nextValue) {
        this.setState({
            code: this.props.textInConsole
        })
    }

    render() {
        return (
            <div className="terminalComponent">
                <div className="button-line">
                    <button id="debug" onClick={this.run}>RUN</button>
                </div>
                <div className="terminal-text">

                </div>
            </div>
        );
    }

    log = (props) => {
        document.querySelector('.terminal-text').textContent = props
    }
}

export default Terminal;