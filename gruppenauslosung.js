document.getElementById('create-groups').addEventListener('click', function () {
    const groupSize = document.getElementById('group-size').value;
    const students = JSON.parse(localStorage.getItem('students')) || [];

    if (groupSize && groupSize > 0 && students.length > 0) {
        let groups = [];
        for (let i = 0; i < students.length; i += groupSize) {
            groups.push(students.slice(i, i + groupSize));
        }

        const resultDiv = document.getElementById('group-result');
        resultDiv.innerHTML = '<h3>Gruppen:</h3>';
        groups.forEach((group, index) => {
            const groupDiv = document.createElement('div');
            groupDiv.innerHTML = `<h4>Gruppe ${index + 1}</h4><p>${group.join(', ')}</p>`;
            resultDiv.appendChild(groupDiv);
        });
    } else {
        alert('Geçerli bir grup boyutu girin!');
    }
});
