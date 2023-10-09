const horses = document.querySelectorAll('.horse');
const startBtn = document.getElementById('startBtn');
const winnerDiv = document.getElementById('winner');
let raceFinished = false;  // Yarışın bitip bitmediğini kontrol eden bir değişken

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    raceFinished = false;  // Her yarışın başında bu durumu sıfırlıyoruz

    horses.forEach(horse => {
        let speed = Math.random() * 5 + 1;
        let distance = 0;

        let interval = setInterval(() => {
            distance += speed;
            horse.style.transform = 'translateX(' + distance + 'px)';

            if (distance >= (document.querySelector('.track').offsetWidth - 110) && !raceFinished) {  // raceFinished kontrolü
                clearInterval(interval);
                winnerDiv.textContent = `${horse.textContent} kazandı!`;
                raceFinished = true;  // Bir at kazandığında bu durumu true yaparak diğer atların kazanmasını engelliyoruz
                startBtn.disabled = false;
            }
        }, 100);
    });
});


