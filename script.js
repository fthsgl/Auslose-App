// Global Variables
let students = JSON.parse(localStorage.getItem("students")) || [];
let items = JSON.parse(localStorage.getItem("items")) || [];

// Save data to localStorage
function saveToLocalStorage() {
    localStorage.setItem("students", JSON.stringify(students));
    localStorage.setItem("items", JSON.stringify(items));
}

// Render students
function renderStudents() {
    const studentList = document.getElementById("student-list");
    studentList.innerHTML = "";
    students.forEach((student, index) => {
        const li = document.createElement("li");
        li.textContent = student;
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger";
        deleteButton.textContent = "Sil";
        deleteButton.onclick = () => {
            students.splice(index, 1);
            saveToLocalStorage();
            renderStudents();
        };
        li.appendChild(deleteButton);
        studentList.appendChild(li);
    });
}

// Render items
function renderItems() {
    const itemList = document.getElementById("item-list");
    itemList.innerHTML = "";
    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger";
        deleteButton.textContent = "Sil";
        deleteButton.onclick = () => {
            items.splice(index, 1);
            saveToLocalStorage();
            renderItems();
        };
        li.appendChild(deleteButton);
        itemList.appendChild(li);
    });
}

// Add student
function addStudent() {
    const studentName = document.getElementById("student-name").value.trim();
    if (studentName) {
        students.push(studentName);
        saveToLocalStorage();
        renderStudents();
        document.getElementById("student-name").value = "";
    }
}

// Add item
function addItem() {
    const itemName = document.getElementById("item-name").value.trim();
    if (itemName) {
        items.push(itemName);
        saveToLocalStorage();
        renderItems();
        document.getElementById("item-name").value = "";
    }
}

// Group students
function groupStudents() {
    const groupSize = parseInt(prompt("Bir grupta kaç öğrenci olmalı?"));
    if (!groupSize || groupSize <= 0) {
        alert("Lütfen geçerli bir grup boyutu girin.");
        return;
    }

    const shuffledStudents = [...students].sort(() => Math.random() - 0.5);
    const groups = [];
    while (shuffledStudents.length) {
        groups.push(shuffledStudents.splice(0, groupSize));
    }

    const resultDiv = document.getElementById("group-results");
    resultDiv.innerHTML = groups
        .map((group, i) => `<p><strong>Grup ${i + 1}:</strong> ${group.join(", ")}</p>`)
        .join("");
}

// Spin the wheel
function spinWheel() {
    if (items.length === 0) {
        alert("Lütfen önce bir item ekleyin.");
        return;
    }

    const wheel = document.querySelector(".wheel");
    const resultDiv = document.getElementById("wheel-result");
    const randomIndex = Math.floor(Math.random() * items.length);
    const spinDegree = 3600 + randomIndex * (360 / items.length);

    wheel.style.transform = `rotate(${spinDegree}deg)`;

    setTimeout(() => {
        resultDiv.textContent = `Sonuç: ${items[randomIndex]}`;
    }, 3000);
}

// Initialize app
function init() {
    if (document.getElementById("student-list")) {
        renderStudents();
    }

    if (document.getElementById("item-list")) {
        renderItems();
    }

    if (document.getElementById("group-btn")) {
        document.getElementById("group-btn").addEventListener("click", groupStudents);
    }

    if (document.querySelector(".spin-btn")) {
        document.querySelector(".spin-btn").addEventListener("click", spinWheel);
    }
}

// Load app
document.addEventListener("DOMContentLoaded", init);
