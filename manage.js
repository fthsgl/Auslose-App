// Navigate function
function navigate(page) {
  window.location.href = `${page}.html`;
}

// Fetch stored data
function getParticipants() {
  return JSON.parse(localStorage.getItem('students')) || [];
}

function getQuestions() {
  return JSON.parse(localStorage.getItem('questions')) || [];
}

// Render lists
function renderParticipants() {
  const participantList = document.getElementById('participantList');
  const participants = getParticipants();

  if (participants.length === 0) {
    participantList.innerHTML = '<li>Keine Schüler vorhanden.</li>';
    return;
  }

  participantList.innerHTML = participants
    .map((participant, index) => `
      <li>
        ${participant}
        <button class="delete-btn" onclick="deleteParticipant(${index})">Löschen</button>
      </li>
    `)
    .join('');
}

function renderQuestions() {
  const questionList = document.getElementById('questionList');
  const questions = getQuestions();

  if (questions.length === 0) {
    questionList.innerHTML = '<li>Keine Fragen vorhanden.</li>';
    return;
  }

  questionList.innerHTML = questions
    .map((question, index) => `
      <li>
        ${question}
        <button class="delete-btn" onclick="deleteQuestion(${index})">Löschen</button>
      </li>
    `)
    .join('');
}

// Delete functions
function deleteParticipant(index) {
  const participants = getParticipants();
  participants.splice(index, 1);
  localStorage.setItem('students', JSON.stringify(participants));
  renderParticipants();
}

function deleteQuestion(index) {
  const questions = getQuestions();
  questions.splice(index, 1);
  localStorage.setItem('questions', JSON.stringify(questions));
  renderQuestions();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderParticipants();
  renderQuestions();
});
