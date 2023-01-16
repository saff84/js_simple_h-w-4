const count = document.getElementById("timer");

const timer = setInterval(()=> {
        if( Number(count.textContent) != 0){
            count.textContent -=1;
        } else {
            clearInterval(timer);
            alert("Вы победили в конкурсе!");
        }     
}, 1000);