document.getElementById('spin').addEventListener('click', function () {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    if (items.length === 0) {
        alert('Lütfen önce item ekleyin!');
    } else {
        const wheel = document.getElementById('wheel');
        wheel.classList.add('spin');

        setTimeout(function () {
            const randomItem = items[Math.floor(Math.random() * items.length)];
            document.getElementById('wheel-result').textContent = `Seçilen Item: ${randomItem}`;
            wheel.classList.remove('spin');
        }, 3000); // 3 saniye sonra sonucu göster
    }
});
