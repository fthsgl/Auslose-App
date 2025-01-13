// Sayfa yüklendiğinde localStorage'dan verileri yükle
document.addEventListener("DOMContentLoaded", function () {
    loadStudents();
    loadItems();
});

// Öğrenci ekleme
document.getElementById('student-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const studentName = document.getElementById('student-name').value;
    if (studentName) {
        let students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(studentName);
        localStorage.setItem('students', JSON.stringify(students));
        loadStudents();
    }
});

// Item ekleme
document.getElementById('item-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const itemName = document.getElementById('item-name').value;
    if (itemName) {
        let items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(itemName);
        localStorage.setItem('items', JSON.stringify(items));
        loadItems();
    }
});

// Öğrencileri listeliyoruz
function loadStudents() {
    const studentList = document.getElementById('student-list');
    const students = JSON.parse(localStorage.getItem('students')) || [];
    studentList.innerHTML = '';
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = student;
        studentList.appendChild(li);
    });
}

// Items'ı listeliyoruz
function loadItems() {
    const itemList = document.getElementById('item-list');
    const items = JSON.parse(localStorage.getItem('items')) || [];
    itemList.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}

// Gruplama sayfasına yönlendirme
document.getElementById('group-draw').addEventListener('click', function () {
    window.location.href = 'gruppenauslosung.html';
});

// Glücksrad sayfasına yönlendirme
document.getElementById('spin-wheel').addEventListener('click', function () {
    window.location.href = 'gluecksrad.html';
});
