const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function loadCalendar(month, year) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const datesContainer = document.getElementById("dates");
    datesContainer.innerHTML = "";

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        datesContainer.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateCell = document.createElement("div");
        dateCell.textContent = day;
        dateCell.addEventListener("click", () => showInfo(day, month, year));
        datesContainer.appendChild(dateCell);
    }

    document.getElementById("month").textContent = months[month];
    document.getElementById("year").textContent = year;
}

function showInfo(day, month, year) {
    const infoText = `Informationen für den ${day}. ${months[month]} ${year}`;
    document.getElementById("info-text").textContent = infoText;
}

document.getElementById("prev-month").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    loadCalendar(currentMonth, currentYear);
});

document.getElementById("next-month").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    loadCalendar(currentMonth, currentYear);
});

document.getElementById("prev-year").addEventListener("click", () => {
    currentYear--;
    loadCalendar(currentMonth, currentYear);
});

document.getElementById("next-year").addEventListener("click", () => {
    currentYear++;
    loadCalendar(currentMonth, currentYear);
});

// Load the initial calendar
loadCalendar(currentMonth, currentYear);
