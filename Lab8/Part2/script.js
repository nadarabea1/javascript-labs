var d = new Date();

function showTime() {
    d = new Date();
    document.getElementById("clock").innerHTML = `
            ${d.toLocaleTimeString()}
            ${d.getDate()}
            ${d.toLocaleString('default', { month: 'long' })}
            ${d.getFullYear()}
            `;
}

setInterval(showTime, 1000);

var alarmTime = 0;

function checkAlarm() {
    var now = new Date();
    var currentTime = now.getTime();

    if (currentTime >= alarmTime) {
        alert("Alarm >>>>>>");
        clearInterval(counter);
    }
}

var counter;

document.getElementById("setAlarmButton").addEventListener("click", function () {
    let hour = parseInt(document.getElementById("hourInput").value);
    let minute = parseInt(document.getElementById("minuteInput").value);
    let second = parseInt(document.getElementById("secondInput").value);

    if (hour < 0 || hour > 23 || minute < 0 || minute > 59 || second < 0 || second > 59) {
        alert("Please enter valid values for hours, minutes, and seconds.");
        return;
    }

    var now = new Date();
    now.setHours(now.getHours() + hour);
    now.setMinutes(now.getMinutes() + minute);
    now.setSeconds(now.getSeconds() + second);
    alarmTime = now.getTime();

    counter = setInterval(checkAlarm, 1000);
});