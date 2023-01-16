const counter = document.getElementById("clicker__counter"),
    cookie = document.getElementById("cookie");

const parent = document.querySelector(".clicker__status"),
    newdiv = document.createElement("div");
newdiv.classList.add('cps');
newspan = document.createElement("span");
newspan.classList.add('cps_count');

parent.appendChild(newdiv);
newdiv.textContent = "Скорость клика ";
newdiv.appendChild(newspan);
newspan.textContent = "0";



let clickNumber = Number(counter.textContent),
    clicsPerSecond = Number(newspan.textContent);


let start = new Date().getTime()

cookie.onclick = function () {
    clickNumber += 1;
    counter.textContent = clickNumber;

    if (cookie.width === 200) {
        cookie.width = 300;
    } else {
        cookie.width = 200;
    }

    newspan.textContent = (clickNumber / ((new Date().getTime()) - start) * 1000).toFixed(2);
}


