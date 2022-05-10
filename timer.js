var thirtySecButton = document.getElementById("thirty-sec");
var fiveMinButton = document.getElementById("five-min");
var fifteenMinButton = document.getElementById("fifteen-min");
var twentyMinButton = document.getElementById("twenty-min");
var sixtyMinButton = document.getElementById("sixty-min");
var inputtedMinutes = document.getElementById("input-minutes");
var reset = document.getElementById("reset");


class Timer {
    constructor(time, measureIsSeconds = false) {
        this.time = time;
        this.measureIsSeconds = measureIsSeconds;
        this.timeToTime = measureIsSeconds ? time : time * 60;
        this.displayEl = document.getElementById("counter");
        this.backTimeEl = document.getElementById("back-time");
        this.start();
    }
    start() {
        this.counterFormatter();
        this.setWaitTime();
        var that=this;
        this.interval = setInterval(function(){that.decrementSeconds()}, 1000);
    }
    counterFormatter() {
        const s = this.timeToTime
        let minutes = Math.floor(s/60).toString();
        let seconds = (s%60).toString();
        if (minutes.length === 1) {minutes = "0"+ minutes};
        if (seconds.length === 1) {seconds = "0"+ seconds};
        this.displayEl.textContent = `${minutes} : ${seconds}`;
    }
    setWaitTime() {
        var formattedTime;
        if (this.timeToTime === 0) {
            formattedTime = 'HERE NOW'
        } else {
            const millis = this.timeToTime*1000;
            const awaitedTime = new Date(new Date().getTime() + millis);
            const hours = awaitedTime.getHours();
            const minutes = awaitedTime.getMinutes();
            const seconds = awaitedTime.getSeconds();
            formattedTime = `BE BACK AT ${hours} h ${minutes} m ${seconds} s`;
        }
        this.backTimeEl.textContent = formattedTime;
    }
    decrementSeconds() {
        console.log('HI')
        console.log(this.timeToTime)
        if (this.timeToTime === 0) {
            this.setWaitTime();
            clearInterval(this.interval);
            this.interval = null;
        } else {
            this.timeToTime = this.timeToTime - 1;
            this.counterFormatter();
        }
    };
    reset() {
        this.timeToTime = 0;
        clearInterval(this.interval);
        this.interval = null;
        this.counterFormatter();
        this.setWaitTime();
    }
}



thirtySecButton.onclick = function() {
    timer = new Timer(30, true);
};
fiveMinButton.onclick = function() {
    incrementSeconds(5, false);
};
fifteenMinButton.onclick = function() {
    incrementSeconds(15, false);
};
twentyMinButton.onclick = function() {
    incrementSeconds(20, false);
};
sixtyMinButton.onclick = function(){
    incrementSeconds(60, false);
};
inputtedMinutes.addEventListener('keydown', function (k) {
    if (k.key === "Enter") {
        incrementSeconds(inputtedMinutes.value, false)
    }
});
reset.onclick = function() {
    timer.reset()
}







