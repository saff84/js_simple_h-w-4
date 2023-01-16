const activeHole = document.querySelector(".hole_has-mole"),
    hole = document.querySelectorAll(".hole"),
    dead = document.getElementById("dead"),
    lost = document.getElementById("lost");



hole.onclick = function () {
    // getHole = index => document.getElementById(`hole${index}`)
    hole.forEach(function(item){
        if (item.classList.contains(".hole_has-mole")) {
            dead.textContent = Number(dead.textContent) + 1;
            console.log(1)
        } else {
            lost.textContent = Number(dead.textContent) + 1;
            console.log(2)
        }
    })
    // if (getHole[index].classList.contains('hole_has-mole')) {
    //     dead.textContent = Number(dead.textContent) + 1;
    //     console.log(1)
    // } else {
    //     lost.textContent = Number(dead.textContent) + 1;
    //     console.log(2)
    // }

}


