
let ay = document.querySelector("#mood")
let moodBtn = document.querySelector(".ay")
let buton2 = document.querySelector(".buton2")
let body = document.querySelector(".arxa-fon")
let h1 = document.querySelector(".h1")
let h2 = document.querySelector(".h2")
let buton1 = document.querySelector(".gunes")

moodBtn.addEventListener("click", () => {

    if (ay.classList.contains("fa-moon")) {

        body.style.backgroundColor = "#0f172a"
        h1.style.color = "white"
        h2.style.color = "white"
        buton2.style.backgroundColor = "#0f172a"
        buton2.style.color = "white"
        moodBtn.innerHTML = ".fa-moon"
        moodBtn.innerHTML = " ☀️ Gündüz"
        ay.classList.replace("fa-moon", "fa-sun")

    } else {
        console.log("light");
        body.style.backgroundColor = "#ffffff"
        h1.style.color = "black"
        h2.style.color = "black"
        buton2.style.backgroundColor = "#ffffff"
        buton2.style.color = "black"

        moodBtn.innerHTML = " 🌙 Gecə"
        ay.classList.replace("fa-sun", "fa-moon")
    }


})

