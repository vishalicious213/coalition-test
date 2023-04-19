const main = document.getElementById("main")
const menu01 = document.getElementById("menu-01")
const menu02 = document.getElementById("menu-02")

// ⬇️ EVENT LISTENERS ⬇️

menu01.addEventListener("click", function() {
    console.log("history")
})

menu02.addEventListener("click", function() {
    console.log("team")
})

// ⬇️ RENDER THE APP ⬇️

function renderMain() {
    main.style.backgroundImage = `url(/img/background-1.jpg)`
}

renderMain()