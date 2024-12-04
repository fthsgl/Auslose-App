// Sayfa yönlendirmesi için fonksiyon
function navigate(page) {
  window.location.href = page; // Sayfayı değiştirme
}

// Katılımcıların bulunduğu listeyi almak
function getStudents() {
  return JSON.parse(localStorage.getItem('students')) || [];
}

// Katılımcıları görüntülemek
function displayStudents() {
  const studentList = document.getElementById('studentList');
  const students = getStudents();
  studentList.innerHTML = ''; 
  if (students.length === 0) {
    studentList.innerHTML = '<li>Henüz katılımcı eklenmemiş.</li>';
  } else {
    studentList.innerHTML = students
      .map((student) => `<li>${student}</li>`)
      .join('');
  }
}

// Katılımcıları ekleme işlemi
document.getElementById('studentForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const studentName = document.getElementById('studentName').value.trim();
  if (studentName) {
    const students = getStudents();
    students.push(studentName);
    localStorage.setItem('students', JSON.stringify(students)); 
    document.getElementById('studentName').value = ''; 
    displayStudents(); 
  }
});

// Katılımcıları gösterme
function toggleStudents() {
  const studentList = document.getElementById('studentList');
  if (studentList.style.display === 'none') {
    displayStudents(); 
    studentList.style.display = 'block';
  } else {
    studentList.style.display = 'none'; 
  }
}

// Soruları ekleme işlemi
function getQuestions() {
  return JSON.parse(localStorage.getItem('questions')) || [];
}

function displayQuestions() {
  const questionList = document.getElementById('questionList');
  const questions = getQuestions();
  questionList.innerHTML = ''; 
  if (questions.length === 0) {
    questionList.innerHTML = '<li>Henüz soru eklenmemiş.</li>';
  } else {
    questionList.innerHTML = questions
      .map((question) => `<li>${question}</li>`)
      .join('');
  }
}

// Soruları gösterme
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
    displayQuestions(); 
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
