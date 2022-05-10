var thirtySecButton = document.getElementById("thirty-sec");
var fiveMinButton = document.getElementById("five-min");
var fifteenMinButton = document.getElementById("fifteen-min");
var twentyMinButton = document.getElementById("twenty-min");
var sixtyMinButton = document.getElementById("sixty-min");
var inputtedMinutes = document.getElementById("input-minutes");
var reset = document.getElementById("reset");


class Timer {
    constructor() {
        this.timeToTime = 0;
        this.displayEl = document.getElementById("counter");
        this.backTimeEl = document.getElementById("back-time");
    }
    setSeconds(sec) {
        this.timeToTime += sec;
        this.start()
    }
    setMinutes(min) {
        this.setSeconds(min*60);
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
    timer.setSeconds(30);
};
fiveMinButton.onclick = function() {
    timer.setMinutes(5);
};
fifteenMinButton.onclick = function() {
    timer.setMinutes(15);
};
twentyMinButton.onclick = function() {
    timer.setMinutes(20);
};
sixtyMinButton.onclick = function(){
    timer.setMinutes(60);
};
inputtedMinutes.addEventListener('keydown', function (k) {
    if (k.key === "Enter") {
        timer.setMinutes(inputtedMinutes.value)
    }
});
reset.onclick = function() {
    timer.reset()
}


timer = new Timer();




