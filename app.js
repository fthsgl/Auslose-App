function navigate(page) {
  window.location.href = `${page}.html`;
}

function resetAllData() {
  if (confirm('Alle Daten wirklich zurücksetzen?')) {
    localStorage.clear();
    alert('Alle Daten wurden zurückgesetzt.');
    window.location.reload();
  }
}

document.getElementById('studentForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('studentName').value.trim();
  if (name) {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(name);
    localStorage.setItem('students', JSON.stringify(students));
    document.getElementById('studentName').value = '';
    displayStudents();
  }
});

function displayStudents() {
  const students = JSON.parse(localStorage.getItem('students')) || [];
  const studentList = document.getElementById('studentList');
  studentList.innerHTML = students.map(student => `<li>${student}</li>`).join('');
}

displayStudents();
