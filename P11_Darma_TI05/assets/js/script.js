// mengambil semua elemen a dengan looping
document.querySelector("#opts a").forEach((a) => {
     // jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
})
function computerChoice(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap elemen result dengan queryselector untuk menampung
    // nilai hasil dari game
    let pilihancomputer = document.querySelector("result");
    
    // membuat array pilihan untuk komputer
    let choices = ["Rock","Paper","Scissors"];

    // pilihan random untuk computer
    pilihancomputer.innerHTML = choices[Math.round(Math.random() * choices.length)]
    pilihancomputer = pilihancomputer.innerHTML;

    // jika pilihan computer sama dengan pilihan user(Draw)
    if (pilihanUser == pilihancomputer ) {
        allert("DRAW")
    }

    // jika pilihan user yang menang
    if (pilihanUser == "Rock" && pilihancomputer == "Scissors") {
        alert("YOU WIN");
    }else if (pilihanUser == "Paper" & pilihancomputer == "Rock") {
        alert("YOU WIN");
    }else if (pilihanUser == "Scissors" & pilihancomputer == "Paper") {
        alert("YOU WIN");
    }else (
        alert("Tidak ada pilihan")
    )


    // jika pilihan computer yang menang
    if (pilihancomputer == "Rock" && pilihanUser == "Scissors") {
        alert("COMPUTER WIN");
    }else if (pilihancomputer == "Paper" & pilihanUser == "Rock") {
        alert("COMPUTER WIN");
    }else if (pilihancomputer == "Scissors" & pilihanUser == "Paper") {
        alert("COMPUTER WIN");
    }else (
        alert("Tidak ada pilihan")
    )
}