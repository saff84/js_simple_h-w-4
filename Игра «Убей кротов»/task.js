const hole = document.querySelectorAll(".hole"),
    dead = document.getElementById("dead"),
    lost = document.getElementById("lost");



hole.forEach((item, index) => {
    hole[index].onclick = function () {
        if (hole[index].classList.contains('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
            if (Number(dead.textContent) === 10) {
                alert("Вы Победили!!!!")
                location.reload();
            }
        } else {
            lost.textContent = Number(lost.textContent) + 1;
            if (Number(lost.textContent) === 5) {
                alert("Вы Проиграли!!!!")
                location.reload();
            }
        };

    };
});