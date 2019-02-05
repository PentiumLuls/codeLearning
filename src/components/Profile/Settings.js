import React from 'react'

export default (props) => {

    const setHotKey = (e) => {
        props.setHotKey(`Ctrl+shift+${e.target.value}`);
        console.log('HOT KEY IS SET' + e.target.value)
    }

    return (
        <div className="profile-top-settings">
            <label>Быстрые клавиши запуска кода </label>
            <label>Ctrl+shift+</label>
            <select name="hotKey" onChange={setHotKey}>
                <option value="x" selected>x</option>
                <option value="c" >c</option>
                <option value="v" >v</option>
                <option value="/" >/</option>
                <option value="z" >z</option>
            </select>
        </div>
    )
}