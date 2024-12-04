// Katılımcıları localStorage'dan alır veya boş bir dizi döner
function getStudents() {
  return JSON.parse(localStorage.getItem('students')) || [];
}

// Katılımcıları ekranda görüntüler
function displayStudents() {
  const studentList = document.getElementById('studentList');
  const students = getStudents();
  studentList.innerHTML = ''; // Önce listeyi temizleyelim
  if (students.length === 0) {
    studentList.innerHTML = '<li>Henüz katılımcı eklenmemiş.</li>';
  } else {
    studentList.innerHTML = students
      .map((student) => `<li>${student}</li>`)
      .join('');
  }
}

// Katılımcı ekleme işlemi
document.getElementById('studentForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const studentName = document.getElementById('studentName').value.trim();
  if (studentName) {
    const students = getStudents();
    students.push(studentName);
    localStorage.setItem('students', JSON.stringify(students)); // LocalStorage'a kaydet
    document.getElementById('studentName').value = ''; // Girdi kutusunu temizle
  }
});

// Katılımcıları gösterme/gizleme
function toggleStudents() {
  const studentList = document.getElementById('studentList');
  if (studentList.style.display === 'none') {
    displayStudents(); // Katılımcıları ekranda göster
    studentList.style.display = 'block';
  } else {
    studentList.style.display = 'none'; // Katılımcıları gizle
  }
}

// Soruları localStorage'dan alır veya boş bir dizi döner
function getQuestions() {
  return JSON.parse(localStorage.getItem('questions')) || [];
}

// Soruları ekranda gösterir
function displayQuestions() {
  const questionList = document.getElementById('questionList');
  const questions = getQuestions();
  questionList.innerHTML = ''; // Önce listeyi temizleyelim
  if (questions.length === 0) {
    questionList.innerHTML = '<li>Henüz soru eklenmemiş.</li>';
  } else {
    questionList.innerHTML = questions
      .map((question) => `<li>${question}</li>`)
      .join('');
  }
}

// Soruları gösterme/gizleme
function toggleQuestions() {
  const questionList = document.getElementById('questionList');
  if (questionList.style.display === 'none') {
    displayQuestions(); // Soruları ekranda göster
    questionList.style.display = 'block';
  } else {
    questionList.style.display = 'none'; // Soruları gizle
  }
}

// Soru ekleme işlemi
document.getElementById('questionForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const questionText = document.getElementById('questionText').value.trim();
  if (questionText) {
    const questions = getQuestions();
    questions.push(questionText); // Soruyu ekle
    localStorage.setItem('questions', JSON.stringify(questions)); // LocalStorage'a kaydet
    document.getElementById('questionText').value = ''; // Girdi kutusunu temizle
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
