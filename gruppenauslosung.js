document.getElementById('group-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const studentList = JSON.parse(localStorage.getItem('students')) || [];
    const groupCount = parseInt(document.getElementById('group-count').value);
    
    if (groupCount && studentList.length >= groupCount) {
        const groups = createGroups(studentList, groupCount);
        displayGroups(groups);
    } else {
        alert("Geçerli bir grup sayısı giriniz!");
    }
});

// Öğrencileri gruplara ayıran fonksiyon
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

// Grupları ekrana yazdırma
function displayGroups(groups) {
    const output = document.getElementById('group-output');
    output.innerHTML = '';
    groups.forEach((group, index) => {
        const groupText = `Grup ${index + 1}: ${group.join(', ')}`;
        const p = document.createElement('p');
        p.textContent = groupText;
        output.appendChild(p);
    });
}
