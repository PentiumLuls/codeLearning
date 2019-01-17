import React, { Component } from 'react';

class Header extends Component {
  
    render() {
      return (
            <header className="userinfo">
                        <div className="avatar"><img alt="avatar" src="https://pbs.twimg.com/media/DYzVb6jX4AEuvrJ.jpg"/></div>
                        <div className="userbuttons">
                            <span className="userbutton"><p>Knopka1</p></span>
                            <span className="userbutton active"><p>Knopka2</p></span>
                        </div>
                    </header>
      );
    }
  }
  export default Header;