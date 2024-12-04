function navigate(page) {
  window.location.href = `${page}.html`;
}

const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');

// Get students from localStorage
const students = JSON.parse(localStorage.getItem('students')) || ["Teilnehmer 1", "Teilnehmer 2"];
let rotationAngle = 0;

// Array to track unselected students
let unselectedStudents = [...students];

// Draw the wheel
function drawWheel() {
  const segmentAngle = (2 * Math.PI) / unselectedStudents.length;
  for (let i = 0; i < unselectedStudents.length; i++) {
    const startAngle = i * segmentAngle + rotationAngle;
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.arc(250, 250, 200, startAngle, startAngle + segmentAngle);
    ctx.fillStyle = i % 2 === 0 ? '#4caf50' : '#81c784';
    ctx.fill();
    ctx.closePath();
    const textAngle = startAngle + segmentAngle / 2;
    ctx.save();
    ctx.translate(250 + Math.cos(textAngle) * 150, 250 + Math.sin(textAngle) * 150);
    ctx.rotate(textAngle);
    ctx.fillStyle = 'white';
    ctx.fillText(unselectedStudents[i], -ctx.measureText(unselectedStudents[i]).width / 2, 0);
    ctx.restore();
  }
}

// Spin the wheel
document.getElementById('spinWheel').addEventListener('click', () => {
  if (unselectedStudents.length === 0) {
    alert('Alle Teilnehmer wurden bereits ausgewählt!');
    return;
  }

  const spinDuration = 3000;
  const spinStart = Date.now();

  function spin() {
    const elapsed = Date.now() - spinStart;
    if (elapsed < spinDuration) {
      rotationAngle += (2 * Math.PI) / 60;
      ctx.clearRect(0, 0, 500, 500);
      drawWheel();
      requestAnimationFrame(spin);
    } else {
      // When spin ends, randomly select a student and remove from the unselected list
      const selectedStudentIndex = Math.floor(Math.random() * unselectedStudents.length);
      const selectedStudent = unselectedStudents[selectedStudentIndex];
      unselectedStudents.splice(selectedStudentIndex, 1); // Remove selected student from unselected list
      document.getElementById('result').textContent = `Ausgewählt: ${selectedStudent}`;

      // Check if all students have been selected
      if (unselectedStudents.length === 0) {
        document.getElementById('result').textContent += " - Alle Teilnehmer wurden ausgewählt!";
      }
    }
  }
  spin();
});

// Draw the wheel initially
drawWheel();
