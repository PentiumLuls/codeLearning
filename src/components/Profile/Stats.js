import React from 'react'

export default (props) => {
    return (
        <div className="profile-top-stats">
            <h3>Статистика</h3>
            <ul className="stats-body">
                <li>Количество написаных символов: <span>{props.stats.symbols}</span></li>
                <li>Удачных запусков квестов: <span>{props.stats.successfulRuns}</span></li>
                <li>Неудачных запусков квестов: <span>{props.stats.unsuccessfulRuns}</span></li>
                <li>Среднее время: <span>{props.averageTime}</span></li>
                <li>Времени в игре: <span>{`${props.timeInGame.hours < 10 ? "0" + props.timeInGame.hours:props.timeInGame.hours}
                :${props.timeInGame.minutes < 10 ? "0" + props.timeInGame.minutes : props.timeInGame.minutes}
                :${props.timeInGame.seconds < 10 ? "0" + props.timeInGame.seconds : props.timeInGame.seconds}`}</span></li>
            </ul>
        </div>
    )
}