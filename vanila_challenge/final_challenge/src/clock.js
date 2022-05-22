const clockform = document.querySelector("#clock")
function clock(){
    const now = new Date();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const day = Intl.DateTimeFormat('ko-KR', { weekday: 'long'}).format(now.getDay());
    const date = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth()).padStart(2, "0");
    const year = String(now.getFullYear()).padStart(4, "0");

    clockform.innerText = `${year}년 ${month}월 ${date}일 ${day} ${hours}시 ${minutes}분`
}

clock();
setInterval(clock, 1000);