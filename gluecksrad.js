document.getElementById('spin').addEventListener('click', function () {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    if (items.length === 0) {
        alert('Lütfen önce item ekleyin!');
    } else {
        const randomItem = items[Math.floor(Math.random() * items.length)];
        document.getElementById('wheel-result').textContent = `Seçilen Item: ${randomItem}`;
    }
});
