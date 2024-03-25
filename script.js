function generareNumereLoto() {
    const interval = [1, 49];
    let numereLoto = [];

    // Generăm un seed bazat pe data și ora curentă
    const seed = new Date().getTime();

    // Setăm seed-ul pentru a asigura aceeași secvență de numere la fiecare apelare
    Math.seed = seed;

    // Generăm 6 numere aleatoare folosind seed-ul
    for (let i = 0; i < 6; i++) {
        const numar = Math.floor(Math.random() * (interval[1] - interval[0] + 1)) + interval[0];
        numereLoto.push(numar);
    }

    const rezultat = document.getElementById("rezultat");
    rezultat.innerHTML = "<div class='numere'>" + numereLoto.map(numar => `<span>${numar}</span>`).join("") + "</div>";
}
