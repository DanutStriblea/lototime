function generareNumereLoto() {
    const interval = [1, 49];
    let numereLoto = new Set(); // Folosim un Set pentru a asigura unicitatea numerelor generate

    // Generăm un seed bazat pe data și ora curentă
    const seed = new Date().getTime();

    // Setăm seed-ul pentru a asigura aceeași secvență de numere la fiecare apelare
    Math.seed = seed;

    // Generăm 6 numere aleatoare folosind seed-ul
    while (numereLoto.size < 6) { // Continuăm să generăm numere până când avem 6 numere unice
        const numar = Math.floor(Math.random() * (interval[1] - interval[0] + 1)) + interval[0];
        numereLoto.add(numar); // Adăugăm numărul în Set
    }

    const rezultat = document.getElementById("rezultat");
    rezultat.innerHTML = "<div class='numere'>" + [...numereLoto].map(numar => `<span>${numar}</span>`).join("") + "</div>"; // Folosim spread operator pentru a converti Set-ul într-un array și apoi afișăm numerele
}
