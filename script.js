// Öğrenciyi ekleme
document.getElementById('add-student').addEventListener('click', function () {
    const studentName = document.getElementById('student-name').value;
    if (studentName !== '') {
        let students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(studentName);
        localStorage.setItem('students', JSON.stringify(students));
        document.getElementById('student-name').value = '';
        loadStudents();
    }
});

// Öğrencileri listeleme ve silme
function loadStudents() {
    const studentList = document.getElementById('student-list');
    const students = JSON.parse(localStorage.getItem('students')) || [];
    studentList.innerHTML = '<h3>Öğrenciler</h3>';
    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = student;

        // Silme butonu
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Sil';
        deleteButton.classList.add('btn', 'btn-danger', 'ms-2');
        deleteButton.addEventListener('click', () => deleteStudent(index));

        li.appendChild(deleteButton);
        studentList.appendChild(li);
    });
}

// Öğrenci silme
function deleteStudent(index) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.splice(index, 1); // Öğrenciyi sil
    localStorage.setItem('students', JSON.stringify(students));
    loadStudents(); // Listeyi yeniden yükle
}

// Item ekleme
document.getElementById('add-item').addEventListener('click', function () {
    const itemName = document.getElementById('item-name').value;
    if (itemName !== '') {
        let items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(itemName);
        localStorage.setItem('items', JSON.stringify(items));
        document.getElementById('item-name').value = '';
        loadItems();
    }
});

// Item'ları listeleme ve silme
function loadItems() {
    const itemList = document.getElementById('item-list');
    const items = JSON.parse(localStorage.getItem('items')) || [];
    itemList.innerHTML = '<h3>Items</h3>';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        // Silme butonu
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Sil';
        deleteButton.classList.add('btn', 'btn-danger', 'ms-2');
        deleteButton.addEventListener('click', () => deleteItem(index));

        li.appendChild(deleteButton);
        itemList.appendChild(li);
    });
}

// Item silme
function deleteItem(index) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.splice(index, 1); // Item'ı sil
    localStorage.setItem('items', JSON.stringify(items));
    loadItems(); // Listeyi yeniden yükle
}

// Sayfalar arası yönlendirme
document.getElementById('grouping-btn').addEventListener('click', function () {
    window.location.href = 'grouping.html';
});

document.getElementById('wheel-btn').addEventListener('click', function () {
    window.location.href = 'wheel.html';
});

// İlk yükleme
loadStudents();
loadItems();
