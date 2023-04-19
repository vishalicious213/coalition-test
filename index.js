const main = document.getElementById("main")
const menu01 = document.getElementById("menu-01")
const menu02 = document.getElementById("menu-02")

// ⬇️ EVENT LISTENERS ⬇️

menu01.addEventListener("click", function() {
    renderHistoryPage()
})

menu02.addEventListener("click", function() {
    renderTeamPage()
})

// ⬇️ EVENT HANDLERS ⬇️

function renderHistoryPage() {
    main.style.backgroundImage = `url(/img/background-2.jpg)`
}

function renderTeamPage() {
    main.style.backgroundImage = `url(/img/background-3.jpg)`
}

// ⬇️ RENDER THE APP ⬇️

function renderMain() {
    main.style.backgroundImage = `url(/img/background-1.jpg)`
}

renderMain()