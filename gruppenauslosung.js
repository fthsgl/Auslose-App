function navigate(page) {
  window.location.href = `${page}.html`;
}

document.getElementById('groupForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const groupCount = parseInt(document.getElementById('groupCount').value, 10);
  const students = JSON.parse(localStorage.getItem('students')) || [];
  if (students.length === 0 || groupCount < 1) {
    alert('Keine Teilnehmer oder Gruppenanzahl ungültig.');
    return;
  }

  const shuffledStudents = [...students].sort(() => Math.random() - 0.5);
  const groups = Array.from({ length: groupCount }, () => []);
  shuffledStudents.forEach((student, index) => {
    groups[index % groupCount].push(student);
  });

  const results = groups
    .map((group, index) => `<div class="group"><h3>Gruppe ${index + 1}</h3><ul>${group.map(student => `<li>${student}</li>`).join('')}</ul></div>`)
    .join('');

  document.getElementById('groupResults').innerHTML = results;
});
