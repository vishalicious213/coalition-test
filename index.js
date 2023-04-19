const main = document.getElementById("main")
const content = document.getElementById("content")
const logo = document.getElementById("logo")
const menu01 = document.getElementById("menu-01")
const menu02 = document.getElementById("menu-02")

// ⬇️ EVENT LISTENERS ⬇️

logo.addEventListener("click", function() {
    renderMain()
})

menu01.addEventListener("click", function() {
    renderHistoryPage()
})

menu02.addEventListener("click", function() {
    renderTeamPage()
})

// ⬇️ EVENT HANDLERS ⬇️

function renderHistoryPage() {
    main.style.backgroundImage = `url(/img/background-2.jpg)`
    content.innerHTML = ""

    content.innerHTML += `
        <div class="hx-content">
            <div>
                <img src="/img/hx-01.png">
                <img src="/img/hx-02.png">
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    `
}

function renderTeamPage() {
    main.style.backgroundImage = `url(/img/background-3.jpg)`
    content.innerHTML = ""
}

// ⬇️ RENDER THE APP ⬇️

function renderMain() {
    main.style.backgroundImage = `url(/img/background-1.jpg)`
    content.innerHTML = ""
}

// renderMain()
renderHistoryPage()