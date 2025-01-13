document.getElementById('group-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const groupSize = document.getElementById('group-size').value;
    const students = JSON.parse(localStorage.getItem('students')) || [];

    if (groupSize && students.length >= groupSize) {
        const groups = createGroups(students, groupSize);
        displayGroups(groups);
    } else {
        alert("Geçerli bir grup boyutu girin!");
    }
});

// Öğrencileri gruplara ayırma
function createGroups(students, groupSize) {
    const groups = [];
    while (students.length) {
        const group = [];
        while (group.length < groupSize && students.length) {
            const randomIndex = Math.floor(Math.random() * students.length);
            group.push(students.splice(randomIndex, 1)[0]);
        }
        groups.push(group);
    }
    return groups;
}

// Grupları ekranda gösterme
function displayGroups(groups) {
    const output = document.getElementById('groups');
    output.innerHTML = '';
    groups.forEach((group, index) => {
        const groupText = `Grup ${index + 1}: ${group.join(', ')}`;
        const p = document.createElement('p');
        p.textContent = groupText;
        output.appendChild(p);
    });
}
