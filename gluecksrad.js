document.getElementById('spin').addEventListener('click', function () {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    
    if (items.length > 0) {
        const randomItem = items[Math.floor(Math.random() * items.length)];
        document.getElementById('wheel-result').innerHTML = `Kazanan: <strong>${randomItem}</strong>`;
    } else {
        alert("Önce item eklemelisiniz!");
    }
});
