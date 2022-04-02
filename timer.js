var sec = 0;
var thirtySecButton = document.getElementById("thirty-sec");
var fiveMinButton = document.getElementById("five-min");
var fifteenMinButton = document.getElementById("fifteen-min");
var twentyMinButton = document.getElementById("twenty-min");
var sixtyMinButton = document.getElementById("sixty-min");
var inputtedMinutes = document.getElementById("input-minutes");
var reset = document.getElementById("reset");

var counter = document.getElementById("counter");
var backTime = document.getElementById("back-time");

thirtySecButton.onclick = function() {
    incrementSeconds(30, true);
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
    sec = 0;
    counterFormatter(sec);
    setWaitTime(sec);
}

function incrementSeconds(val, measureIsSeconds) {
    measureIsSeconds ? sec = sec + val : sec = sec + val * 60;
    counterFormatter(sec);
    setWaitTime(sec);
    
};

setInterval(decrementSeconds, 1000);

function decrementSeconds() {
    if (sec === 0) {
        setWaitTime(sec);
    } else {
        sec = sec - 1;
        counterFormatter(sec);
    }
};

function counterFormatter(s) {
    let minutes = Math.floor(s/60).toString();
    let seconds = (s%60).toString()
    minutes.length === 1 ? minutes = "0"+ minutes : minutes = minutes
    seconds.length === 1 ? seconds = "0"+ seconds : seconds = seconds
    formattedVal = minutes + " : "+ seconds;
    counter.textContent = formattedVal;
}

function setWaitTime(s) {
    if (s === 0) {
        formattedTime = 'HERE NOW'
    } else {
        const millis = s*1000;
        awaitedTime = new Date(new Date().getTime() + millis);
        const hours = awaitedTime.getHours();
        const minutes = awaitedTime.getMinutes();
        const seconds = awaitedTime.getSeconds();
        formattedTime = 'BE BACK AT ' + hours + "h "+ minutes + "m " + seconds + "s";
    }
    backTime.textContent = formattedTime;
}





