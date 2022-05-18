const clockTitle = document.querySelector(".js-clock");

function daytomili(num) {
    return num*1000*3600*24
}

function hourtomili(num) {
    return num*1000*3600
}

function minutetomili(num) {
    return num*1000*60
}

function getDDay() {
    const now = new Date();
    const Xmas = new Date(Date.UTC(now.getFullYear(), 11, 24, 15, 0, 0));
    const dDay = Xmas - now; //milliseconds

    const day = String(Math.floor(dDay/1000/3600/24)).padStart(3,"0");
    const hours = String(Math.floor((dDay - daytomili(day))/1000/3600)).padStart(2, "0");
    const minutes = String(Math.floor((dDay - daytomili(day) - hourtomili(hours))/1000/60)).padStart(2, "0");
    const seconds = String(Math.floor((dDay - daytomili(day) - hourtomili(hours)-minutetomili(minutes))/1000)).padStart(2, "0");
    clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`
}

getDDay();
setInterval(getDDay, 1000);