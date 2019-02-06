import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import SlidersExample from './SliderExample'

export default class Settings extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            musicValue: 0.4,
            soundValue: 0.8
        }
    }

    setHotKey = (e) => {
        this.setState({
            musicValue: this.state.musicValue + 0.1
        })
        this.props.setHotKey(`Ctrl+shift+${e.target.value}`);
    }

    render() {
        return (
            <div className="profile-top-settings">
                <label>Быстрые клавиши запуска кода </label>
                <label>Ctrl+shift+</label>
                <select defaultValue="x" name="hotKey" onChange={this.setHotKey}>
                    <option value="x">x</option>
                    <option value="c" >c</option>
                    <option value="v" >v</option>
                    <option value="/" >/</option>
                    <option value="z" >z</option>
                </select> <br/><br/>
                <p>Фоновая музыка</p>
                <SlidersExample value={this.props.musicValue} change={this.props.changeMusicValue}/>
                 <br/>
                <p>Звуки</p>
                <SlidersExample value={this.props.soundValue} change={this.props.changeSoundValue}/>
            </div>
        )
    }

}

    
