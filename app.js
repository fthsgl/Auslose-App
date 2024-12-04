function navigate(page) {
  window.location.href = `${page}.html`;
}

// LocalStorage Utility Functions
function getStudents() {
  return JSON.parse(localStorage.getItem('students')) || [];
}

function getQuestions() {
  return JSON.parse(localStorage.getItem('questions')) || [];
}

// Display Students
function displayStudents() {
  const studentList = document.getElementById('studentList');
  const students = getStudents();
  studentList.innerHTML = '';
  const spinButton = document.getElementById('spinWheel');

  if (students.length === 0) {
    studentList.innerHTML = '<li>Keine Teilnehmer vorhanden.</li>';
    if (spinButton) spinButton.disabled = true;
  } else {
    studentList.innerHTML = students.map((student) => `<li>${student}</li>`).join('');
    if (spinButton) spinButton.disabled = false;
  }
}

// Add Students
document.getElementById('studentForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const studentName = document.getElementById('studentName').value.trim();
  if (studentName) {
    const students = getStudents();
    if (students.includes(studentName)) {
      alert('Teilnehmer ist bereits in der Liste.');
      return;
    }
    students.push(studentName);
    localStorage.setItem('students', JSON.stringify(students));
    document.getElementById('studentName').value = '';
    displayStudents();
  }
});

// Display Questions
function displayQuestions() {
  const questionList = document.getElementById('questionList');
  const questions = getQuestions();
  questionList.innerHTML = '';
  if (questions.length === 0) {
    questionList.innerHTML = '<li>Henüz soru eklenmemiş.</li>';
  } else {
    questionList.innerHTML = questions.map((question) => `<li>${question}</li>`).join('');
  }
}

// Add Questions
document.getElementById('questionForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const questionText = document.getElementById('questionText').value.trim();
  if (questionText) {
    const questions = getQuestions();
    questions.push(questionText);
    localStorage.setItem('questions', JSON.stringify(questions));
    document.getElementById('questionText').value = '';
    displayQuestions();
  }
});

// Reset All Data
function resetAllData() {
  if (confirm('Alle Daten wirklich zurücksetzen?')) {
    localStorage.clear();
    alert('Alle Daten wurden zurückgesetzt.');
    window.location.reload();
  }
}

// Export Data
function exportData() {
  const data = {
    students: getStudents(),
    questions: getQuestions(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.json';
  a.click();
  URL.revokeObjectURL(url);
}

// Import Data
function importData() {
  document.getElementById('importFile').click();
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const data = JSON.parse(e.target.result);
        if (data.students && data.questions) {
          localStorage.setItem('students', JSON.stringify(data.students));
          localStorage.setItem('questions', JSON.stringify(data.questions));
          alert('Daten erfolgreich importiert.');
          displayStudents();
          displayQuestions();
        } else {
          alert('Ungültige Datei.');
        }
      } catch {
        alert('Fehler beim Verarbeiten der Datei.');
      }
    };
    reader.readAsText(file);
  }
}

// Initial Display
displayStudents();
displayQuestions();
