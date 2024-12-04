// Katılımcıları `localStorage`'tan alır veya boş bir dizi döner
function getStudents() {
  return JSON.parse(localStorage.getItem('students')) || [];
}

// Katılımcıları ekranda görüntüler
function displayStudents() {
  const studentList = document.getElementById('studentList');
  const students = getStudents();
  studentList.innerHTML = students
    .map((student) => `<li>${student}</li>`)
    .join('');
}

// Katılımcı ekleme işlemi
document.getElementById('studentForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const studentName = document.getElementById('studentName').value.trim();
  if (studentName) {
    const students = getStudents();
    students.push(studentName);
    localStorage.setItem('students', JSON.stringify(students));
    document.getElementById('studentName').value = '';
    displayStudents(); // Listeyi güncelle
  }
});

// Soruları `localStorage`'tan alır veya boş bir dizi döner
function getQuestions() {
  return JSON.parse(localStorage.getItem('questions')) || [];
}

// Soruları ekranda gösterir
function displayQuestions() {
  const questionList = document.getElementById('questionList');
  const questions = getQuestions();
  questionList.innerHTML = questions
    .map((question) => `<li>${question}</li>`)
    .join('');
}

// Soruları gösterme/gizleme
function toggleQuestions() {
  const questionList = document.getElementById('questionList');
  if (questionList.style.display === 'none') {
    displayQuestions();
    questionList.style.display = 'block';
  } else {
    questionList.style.display = 'none';
  }
}

// Soru ekleme işlemi
document.getElementById('questionForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const questionText = document.getElementById('questionText').value.trim();
  if (questionText) {
    const questions = getQuestions();
    questions.push(questionText);
    localStorage.setItem('questions', JSON.stringify(questions));
    document.getElementById('questionText').value = '';
  }
});

// Verileri sıfırlama işlemi
function resetAllData() {
  if (confirm('Alle Daten wirklich zurücksetzen?')) {
    localStorage.clear();
    alert('Alle Daten wurden zurückgesetzt.');
    window.location.reload();
  }
}

// Sayfa yüklendiğinde katılımcıları görüntüle
displayStudents();
