
const totalCounter = document.getElementById("total");
const interviewCounter = document.getElementById("Interview");
const rejectedCounter = document.getElementById("Rejected");
const tabCount = document.getElementById("tabCount");

const tabButtons = {
    all: document.getElementById("all"),
    Interview: document.getElementById("InterviewTab"),
    Rejected: document.getElementById("RejectedTab")
};

let jobs = [];

function initJobs() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        const job = { id: index, cardElement: card, status: "Not Applied" };
        jobs.push(job);

        card.querySelector(".delete").addEventListener("click", () => deleteJob(job.id));
        card.querySelector(".interview").addEventListener("click", () => updateStatus(job.id, "Interview"));
        card.querySelector(".rejected").addEventListener("click", () => updateStatus(job.id, "Rejected"));
    });

    updateCounters();
    renderFiltered("all");
}

function deleteJob(id) {
    const index = jobs.findIndex(j => j.id === id);
    if (index !== -1) {
        jobs[index].cardElement.remove();
        jobs.splice(index, 1);
        updateCounters();
        renderFiltered(getActiveTab());
    }
}

function updateStatus(id, status) {
    const job = jobs.find(j => j.id === id);
    if (job) {
        job.status = status;
        updateCounters();
        renderFiltered(getActiveTab());
    }
}

function updateCounters() {
    totalCounter.innerText = jobs.length;
    interviewCounter.innerText = jobs.filter(j => j.status === "Interview").length;
    rejectedCounter.innerText = jobs.filter(j => j.status === "Rejected").length;
    tabCount.innerText = jobs.length + " jobs";
}

function togglestyle(tabName) {
    for (let key in tabButtons) {
        tabButtons[key].classList.remove("bg-blue-500");
        tabButtons[key].classList.add("bg-gray-300");
    }
    tabButtons[tabName].classList.remove("bg-gray-300");
    tabButtons[tabName].classList.add("bg-blue-500");

    renderFiltered(tabName);
}

function getActiveTab() {
    for (let key in tabButtons) {
        if (tabButtons[key].classList.contains("bg-blue-500")) return key;
    }
    return "all";
}

function renderFiltered(filter) {
    const cards = document.querySelectorAll(".card");
    let filteredJobs = filter === "all" ? jobs : jobs.filter(j => j.status === filter);
    cards.forEach(card => card.style.display = "none");
    filteredJobs.forEach(job => job.cardElement.style.display = "flex");
    tabCount.innerText = filteredJobs.length + " jobs";
}

window.addEventListener("DOMContentLoaded", initJobs);