document.addEventListener("DOMContentLoaded", function() {  
    function updateTime() {  
        var time = new Date();  
        var hours = time.getHours();  
        var minutes = time.getMinutes();  
        var seconds = time.getSeconds();  
        hours = hours < 10 ? "0" + hours : hours;  
        minutes = minutes < 10 ? "0" + minutes : minutes;  
        seconds = seconds < 10 ? "0" + seconds : seconds;  
        var timeString = hours + ":" + minutes; 
        document.getElementById("getTime").textContent = timeString;  
    }  
    updateTime(); // 首次加载时更新时间  
    setInterval(updateTime, 1000); // 每秒更新一次时间  
});