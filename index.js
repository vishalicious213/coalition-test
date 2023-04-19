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
            <div class="content-header">
                <img class="content-number" src="/img/01.png">
            </div>

            <p class="content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    `
}

function renderTeamPage() {
    main.style.backgroundImage = `url(/img/background-3.jpg)`
    content.innerHTML = ""

    content.innerHTML += `
        <section class="team-container">
            <div class="team-content">
                <div class="team-header">
                    <img class="team-number" src="/img/02.png">
                </div>

                <p class="team-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="team-menu">
                <span>Mountain 1</span>
                <span>Mountain 2</span>
            </div>

            <div class="schedule">
                <h2>Schedule</h2>
                <table>
                    <tr>
                        <td class="schedule-date">25 Nov 2016</td>
                        <td>Vestibulum viverra</td>
                    </tr>
                    <tr>
                        <td class="schedule-date">28 Nov 2016</td>
                        <td>Vestibulum viverra</td>
                    </tr>
                    <tr class="empty-row"></tr>
                    <tr>
                        <td class="schedule-date">18 Dec 2016</td>
                        <td>Vestibulum viverra</td>
                    </tr>
                    <tr class="empty-row"></tr>
                    <tr>
                        <td class="schedule-date">07 Jan 2017</td>
                        <td>Vestibulum viverra</td>
                    </tr>
                </table>
            </div>
        </section>
    `
}

// ⬇️ RENDER THE APP ⬇️

function renderMain() {
    main.style.backgroundImage = `url(/img/background-1.jpg)`
    content.innerHTML = ""
}

// renderMain()
renderTeamPage()