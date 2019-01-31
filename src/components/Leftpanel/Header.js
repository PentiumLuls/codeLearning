import React, { Component } from 'react';
import { connect } from 'react-redux'


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
                        <div className="avatar-wrapper">
                            <div onClick={this.props.func3} className="avatar"><img alt="avatar" src={require("../../img/VanDarkholme.jpg")}/></div>
                            <div className="header-money"><p>{this.props.money}</p></div>
                        </div>
                        <div className="userbuttons">
                            <span className="userbutton" onClick={this.click}><p>Журнал</p></span>
                            <span className="userbutton" onClick={this.click2}><p>Редактор кода</p></span>
                        </div>
            </header>
      );
    }
  }

const mapStateToProps = store => {
    return {
        money: store.money
    }
}

export default connect(mapStateToProps)(Header);

