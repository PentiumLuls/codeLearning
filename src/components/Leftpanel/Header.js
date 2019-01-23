import React, { Component } from 'react';

class Header extends Component {

    constructor() {
        super();
        this.click = () => {
            this.props.func();
        }
        this.click2 = () => {
            this.props.func2();
        }
    }

    render() {
      return (
            <header className="userinfo">
                        <div className="avatar"><img alt="avatar" src="https://pbs.twimg.com/media/DYzVb6jX4AEuvrJ.jpg"/></div>
                        <div className="userbuttons">
                            <span className="userbutton" onClick={this.click}><p>Журнал</p></span>
                            <span className="userbutton" onClick={this.click2}><p>Редактор кода</p></span>
                        </div>
                    </header>
      );
    }
  }
  export default Header;

