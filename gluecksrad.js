document.getElementById('spin').addEventListener('click', function () {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    
    if (items.length > 0) {
        const randomItem = items[Math.floor(Math.random() * items.length)];
        document.getElementById('wheel-result').innerHTML = `<h2 class="display-5 text-success">Kazanan: <strong>${randomItem}</strong></h2>`;
    } else {
        alert("Önce item eklemelisiniz!");
    }
});
