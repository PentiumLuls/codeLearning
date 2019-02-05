const time = {
    hours: 0,
    minutes: 0,
    seconds: 0
}

const interval = setInterval(() => {
    tick(time);
    console.log(time)
}, 1000)


function tick(time) {
    if(time.seconds === 59) {
        if(time.minutes === 59){
            time.hours += 1
            time.minutes = 0
            time.seconds = 0
        } else {
            time.minutes += 1
            time.seconds = 0
        }
    } else {
        time.seconds += 1
    }
}




const time = Date()

