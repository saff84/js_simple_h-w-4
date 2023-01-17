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



let clickNumber = Number(counter.textContent);


// let start = new Date().getTime()

cookie.onclick = function () {
    clickNumber += 1;
    counter.textContent = clickNumber;

    if (cookie.width === 200) {
        cookie.width = 300;
        start = new Date()
    } else {
        cookie.width = 200;
        end = new Date()
    }

    let time = Math.abs(end - start)
    newspan.textContent = ((1 / time) * 1000).toFixed(2)
    // newspan.textContent = (clickNumber / ((new Date().getTime()) - start) * 1000).toFixed(2);
}


