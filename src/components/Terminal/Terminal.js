import React, {Component} from 'react';
import { svictor } from '../../plot/devil';
import { replics } from '../../plot/Object';
import Button from './Button/Button'

class Terminal extends Component {


    constructor() {
        super();
        this.writeReplics = (replica, name, key) => {
            let x = 0;
            let interval = setInterval(() => {
                let replic = `${name}:~$ ${replica[x++]}`;
                this.setState({
                    replics: [...this.state.replics, replic]
                });
                if (x >= replics.length) {
                    clearInterval(interval);
                    localStorage.button_run = key || 0;
                }
            }, 500);  
            
        };
        this.state={
            code: "NO CODE",
            replics: []
        }
        
    }



    run = () => {

        try {

            let fine = true;
            let regexps = [
                /for/,
                /while/,
                /filter/,
                /reduce/,
                /map/,
                /var/
            ]

            regexps.forEach((regexp) => {
                if(regexp.test(this.state.code)) {
                    fine = false;
                }
            })
            

            if(!fine){
                document.querySelector('.terminal-text').textContent = "HEU WHATA are YOU DOing, it's a sin"
            }
            else{
                
                document.querySelector('.terminal-text').textContent = eval(this.state.code);
            
                 
                
                document.querySelector('.terminal-text').textContent = "OOO, you created it. wau i tell my friendes thet u are very cool";
            }
        } catch (err) {
            document.querySelector('.terminal-text').textContent = err;
        }
    }

    nextReplic = () => {
        this.writeReplics(replics, "Gomuncul");
    }

    clearTerminal = () => {
        this.setState({
            replics: []
        });
    }


    componentDidMount() {
        console.log(svictor);
         this.writeReplics(svictor[0], "Mephisto", '1');
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
                <Button text="RUN CODE" className="debug" func={this.run}></Button>
                <Button text="CLEAR TERMINAL" className="debug" func={this.clearTerminal}></Button>
                <Button text="I VSE PONYAL" className="debug" func={this.nextReplic} isDialog={true}></Button>
            </div>
            <ul className="terminal-text">
                { this.state.replics.map(r => <li>{r}</li>) }
            </ul>
        </div>
    );
  }

}

export default Terminal;



