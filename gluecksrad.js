function navigate(page) {
  window.location.href = `${page}.html`;
}

const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
const students = JSON.parse(localStorage.getItem('students')) || ["Teilnehmer 1", "Teilnehmer 2"];
let rotationAngle = 0;

function drawWheel(color1 = '#4caf50', color2 = '#81c784') {
  const segmentAngle = (2 * Math.PI) / students.length;
  for (let i = 0; i < students.length; i++) {
    const startAngle = i * segmentAngle + rotationAngle;
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.arc(250, 250, 200, startAngle, startAngle + segmentAngle);
    ctx.fillStyle = i % 2 === 0 ? color1 : color2;
    ctx.fill();
    ctx.closePath();
    const textAngle = startAngle + segmentAngle / 2;
    ctx.save();
    ctx.translate(250 + Math.cos(textAngle) * 150, 250 + Math.sin(textAngle) * 150);
    ctx.rotate(textAngle);
    ctx.fillStyle = 'white';
    ctx.fillText(students[i], -ctx.measureText(students[i]).width / 2, 0);
    ctx.restore();
  }
}

function announceResult(name) {
  const speech = new SpeechSynthesisUtterance(name);
  speech.lang = 'de-DE';
  window.speechSynthesis.speak(speech);
}

document.getElementById('spinWheel').addEventListener('click', () => {
  const spinDuration = 3000;
  const spinStart = Date.now();
  const spin = () => {
    const elapsed = Date.now() - spinStart;
    if (elapsed < spinDuration) {
      rotationAngle += (2 * Math.PI) / 60;
      ctx.clearRect(0, 0, 500, 500);
      drawWheel();
      requestAnimationFrame(spin);
    } else {
      const selectedIndex = Math.floor((rotationAngle % (2 * Math.PI)) / ((2 * Math.PI) / students.length));
      const winner = students[selectedIndex];
      announceResult(winner);
      document.getElementById('result').innerText = `Gewinner: ${winner}`;
    }
  };
  spin();
});

drawWheel();
