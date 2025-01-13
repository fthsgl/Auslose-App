document.addEventListener("DOMContentLoaded", function () {
    loadStudents();
    loadItems();
});

// Öğrenci ekleme
document.getElementById('add-student').addEventListener('click', function () {
    const studentName = document.getElementById('student-name').value;
    if (studentName) {
        let students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(studentName);
        localStorage.setItem('students', JSON.stringify(students));
        loadStudents();
        document.getElementById('student-name').value = '';  // Clear input
    }
});

// Item ekleme
document.getElementById('add-item').addEventListener('click', function () {
    const itemName = document.getElementById('item-name').value;
    if (itemName) {
        let items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(itemName);
        localStorage.setItem('items', JSON.stringify(items));
        loadItems();
        document.getElementById('item-name').value = '';  // Clear input
    }
});

// Öğrencileri listele
function loadStudents() {
    const studentList = document.getElementById('student-list');
    const students = JSON.parse(localStorage.getItem('students')) || [];
    studentList.innerHTML = '<h3>Öğrenciler</h3>';
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = student;
        studentList.appendChild(li);
    });
}

// Items'ı listele
function loadItems() {
    const itemList = document.getElementById('item-list');
    const items = JSON.parse(localStorage.getItem('items')) || [];
    itemList.innerHTML = '<h3>Items</h3>';
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
